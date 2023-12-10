import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Recherche from "../recherche";
import Iconographies from "../Iconographies";
import Identification from "../Identification";

function CustomTabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			className="w-full flex justify-center items-center"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ px: 6 }} className="w-full">
					{children}
				</Box>
			)}
		</div>
	);
}

CustomTabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

export default function TabPanel() {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box>
			<Box className="py-4 flex justify-center items-center">
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="basic tabs example"
				>
					<Tab label="WELCOME" {...a11yProps(0)} />
					<Tab label="Weapon & Family Search" {...a11yProps(1)} />
					<Tab label="Search for Iconographies" {...a11yProps(2)} />
					<Tab label="Administration" {...a11yProps(3)} />
				</Tabs>
			</Box>
			<CustomTabPanel value={value} index={0}>
				<Recherche />
			</CustomTabPanel>
			<CustomTabPanel value={value} index={1}>
				<Recherche />
			</CustomTabPanel>
			<CustomTabPanel value={value} index={2}>
				<Iconographies />
			</CustomTabPanel>
			<CustomTabPanel value={value} index={3}>
				<Identification />
			</CustomTabPanel>
		</Box>
	);
}
