import React from 'react';
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';

export default function Layout({ children }) {
	return (
		<div>
			<Head>
				<title>Corniche Market</title>
			</Head>
			<AppBar position="static">
				<Toolbar>
					<Typography>Corniche Market</Typography>
				</Toolbar>
			</AppBar>
			<Container>{children}</Container>
			<footer>
				<Typography>All right reserved Corniche Market</Typography>
			</footer>
		</div>
	);
}
