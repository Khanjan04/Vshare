import React,{useState} from 'react';
import {projectFirestore,timestamp} from '../firebase/config';
import useFirestore from '../hooks/useFirestore';

import React, { useState } from "react";
import { useAppState } from "../state";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { TextField, Button } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Axios from "axios";
import { Alert } from "react-bootstrap";

const Qlist = () =>{

  const { getTeacher, getAnnouncementDetails, addAnnouncement } = useAppState();
  const [value, setvalue] = useState([]);
  const [announcements, setannouncements] = useState(getAnnouncementDetails());
  const [values, setValues] = useState({
    name: "",
    description: "",
    photo: "",
    subject: "",
    formData: "",
  });
  const [success, setsuccess] = useState([]);
  const { name, description, photo, subject, Name, question, answer, formData } = values;

  const handleSubmit = async () => {
    var res = await addAnnouncement(value);
    if (res) {
      var array = res.data.teacher.announcements.length;
      console.log(res.data.teacher.announcements[array - 1]);
      setannouncements(res.data.teacher.announcements);
      setvalue("");
    }
  };

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    // formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const handlePhotoSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("subject", subject);
    formData.append("photo", photo);
    Axios.post(
      ``,
      formData,
      {
        headers: {
          Authorization: `Bearer ${getTeacher().token}`,
        },
      }
    ).then((res) => {
      setValues({
        name: "",
        description: "",
        subject: "",
      });
      setsuccess([" Files uploaded to the server successfully"]);
    });
  };
  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        TY-41
        {". "}
        Made with{" "}
        <span role="img" aria-label="sheep">
          ❤️
        </span>{" "}
        {"."}
      </Typography>
    );
  }

  const useStyles = makeStyles((theme) => ({
    seeMore: {
      marginTop: theme.spacing(12),
    },
    font: {
      fontSize: "18px",
    },
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const classes = useStyles();
 
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell className={classes.font}>Date</TableCell>
            <TableCell className={classes.font}>Name</TableCell>
            <TableCell className={classes.font} align="center">
              Question
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {announcements &&
            announcements.map((item, index) => (
              <TableRow key={index}>
                <TableCell className={classes.font}>Dec-2020</TableCell>
                <TableCell className={classes.font}>
                  {getTeacher().teacher.name}
                </TableCell>
                <TableCell className={classes.font} align="center">
                  {item}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      <div class="announcement">
        <h5> Your questions will appear here.</h5>
      </div>
      <hr />
      {/* Question Answer SECTION */}
      <h3 style={{ textAlign: "center", marginTop: "40px" }}> Ask a Question </h3>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            <TextField
              value={name}
              onChange={handleChange("name")}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Name"
              autoFocus
            />
            <TextField
              value={subject}
              onChange={handleChange("subject")}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Subject"
              autoFocus
            />
            <TextField
              value={question}
              onChange={handleChange("description")}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Question"
              type="name"
              id="name"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              // onClick={(e) => handlePhotoSubmit(e)}
            >
              Ask Question
            </Button>
            
          </form>
        </div>

        {success &&
          success.map((item, index) => (
            <Alert
              key={index}
              variant="success"
              className="mt-2"
              style={{ textAlign: "center" }}
            >
              {item}
            </Alert>
          ))}
      </Container>

      <h3 style={{ textAlign: "center", marginTop: "40px" }}> Give an Answer </h3>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            <TextField
              value={Name}
              onChange={handleChange("name")}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Name"
              autoFocus
            />
            <TextField
              value={Question}
              onChange={handleChange("subject")}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Question"
              autoFocus
            />
            <TextField
              value={answer}
              onChange={handleChange("description")}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Answer"
              type="name"
              id="name"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              // onClick={(e) => handlePhotoSubmit(e)}
            >
              Give an Answer
            </Button>
          </form>
        </div>
        {success &&
          success.map((item, index) => (
            <Alert
              key={index}
              variant="success"
              className="mt-2"
              style={{ textAlign: "center" }}
            >
              {item}
            </Alert>
          ))}
      </Container>
      
      <Box mt={8}>
        <Copyright />
      </Box>
    </React.Fragment>

		const{docs} = useFirestore('questions');
		const[question, setQuestion] = useState(null);
		const[entered, setEntered] = useState(null);
		
		const handleQuestion=(e)=>{
			setQuestion(e.target.value);
		}
		
		const handleChange =(e)=>{
			e.preventDefault();
			const createdAt = timestamp();
			let q = question;
			projectFirestore.collection('questions').add({question:question,createdAt:createdAt}).then(function(docRef) {
    			console.log("Document written with ID: ", docRef.id);
    			setQuestion(null);
    			
			})
			.catch(function(error) {
    			console.error("Error adding document: ", error);
			});		
			
			projectFirestore.collection("questions").get().then((querySnapshot) => {
    			querySnapshot.forEach((doc) => {
      			//console.log("Hello there",doc.data().a);
    			});
			});
		}
		
		return (
		<div>
			<div>
				<form onSubmit={handleChange}>
					<label>
						Enter Question :
						<input type = 'text' onChange = {handleQuestion}/>
					</label>
					
					<label className='plus-button'>
						+
						<input type="submit" value='Submit' />						
					</label>
				</form>
			</div>
		
			<div>
				<ol className = 'rounded-list'>
					
					{docs && docs.map(doc=>(
						<div>
						<li>{doc.question}</li>
							<ol className ='rectangle-list'>
								{doc.answer && doc.answer.map(ans=>(							
									<li>{ans}</li>
								))}
							</ol>
							<div>
								Enter Answer :
								<input type = 'text' />
							</div>
						
						<div className='plus-buttonu'><span></span></div></div>
					))}
				
				</ol>
				 
			</div>

			<h3 style={{ textAlign: "center", marginTop: "40px" }}> Give an Answer </h3>
      <React.Fragment>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            <TextField
              value={Name}
              onChange={handleChange("name")}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Name"
              autoFocus
            />
            <TextField
              value={Question}
              onChange={handleChange("subject")}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Question"
              autoFocus
            />
            <TextField
              value={answer}
              onChange={handleChange("description")}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Answer"
              type="name"
              id="name"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              // onClick={(e) => handlePhotoSubmit(e)}
            >
              Give an Answer
            </Button>
          </form>
        </div>
        {success &&
          success.map((item, index) => (
            <Alert
              key={index}
              variant="success"
              className="mt-2"
              style={{ textAlign: "center" }}
            >
              {item}
            </Alert>
          ))}
      </Container>
      </React.Fragment>
		</div>
		);
}
export default Qlist;
