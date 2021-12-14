import React from "react";
import login from "../../assets/images/login.jpg";
import "./Login.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { color } from "@mui/system";
import SignInSide from "../Signup/Signup";
// import {useHistory} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function LoginSide() {
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		// eslint-disable-next-line no-console
	};

	const navigate = useNavigate();

	return (
		<Grid container component="main" sx={{ height: "100vh" }}>
			<Grid
				item
				xs={12}
				sm={8}
				md={8}
				component={Paper}
				elevation={6}
				square
				backgroundColor="#ececed"
			>
				<div>
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Typography
							component="h1"
							variant="h5"
							display="flex"
							flexDirection="column"
							alignItems="right"
							sx={{ mt: 8, fontWeight: "bold" }}
						>
							SIGN IN
						</Typography>
						<Typography component="h6">
							to continue and book your slot
						</Typography>
						<Box
							component="form"
							noValidate
							onSubmit={handleSubmit}
							sx={{ mt: 1 }}
						>
							<TextField
								margin="normal"
								required
								sx={{ width: "350px" }}
								id="email"
								label="Email"
								name="email"
								autoComplete="email"
								autoFocus
							/>
							<TextField
								margin="normal"
								required
								sx={{
									width: "350px",
									display: "flex",
									flexDirection: "column",
								}}
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
							/>
							<FormControlLabel
								control={<Checkbox value="remember" color="primary" />}
								label="Remember me"
							/>
							<Button
								type="submit"
								fullWidth
								variant="outlined"
								sx={{ mt: 3, mb: 2 }}
							>
								Sign In
							</Button>
						</Box>
					</Box>
				</div>
			</Grid>

			<Grid
				item
				xs={false}
				sm={4}
				md={4}
				sx={{
					backgroundImage: login,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<img
					src="login.jpg"
					style={{ width: "100%", height: "100vh" }}
				/>
				<Button
					className="login_button"
					type="button"
					variant="contained"
					onClick={() => {
						navigate("/");
					}}
					sx={{
						mt: -145,
						mb: 1,
						mr: 50,
						// ml: 1,
						backgroundColor: "#ececed",
						borderTopRightRadius: "50%",
						borderBottomRightRadius: "50%",
						borderTopLeftRadius: "2%",
						borderBottomLeftRadius: "2%",
						color: "black",
						paddingRight: "25px",
						paddingTop: "10px",
						paddingBottom: "10px",
						fontWeight: "bold",
					}}
				>
					Login
				</Button>
				<Button
					type="button"
					variant="contained"
					onClick={() => {
						navigate("/signup");
					}}
					sx={{
						mt: -135,
						mb: 2,
						mr: 58,
						// ml: -2,
						// borderRadius: "50%",
						// border: "red",
						padding: "10px",
						width: "100px",
						backgroundColor: "black",
						borderTopRightRadius: "50%",
						borderBottomRightRadius: "50%",
						borderTopLeftRadius: "2%",
						borderBottomLeftRadius: "2%",
						paddingRight: "25px",
						paddingTop: "10px",
						paddingBottom: "10px",
						// backgroundColor:"red",
						color: "white",
						fontWeight: "bold",
					}}
				>
					Sign Up
				</Button>
				<Typography
					component="h6"
					variant="h2"
					fontWeight="bold"
					fontSize="35px"
					color="white"
					sx={{
						mt: -55,
						mr: 12,
						ml: 15,
						opacity: 1,
					}}
				>
					Welcome, Back
				</Typography>
			</Grid>
		</Grid>
	);
}
