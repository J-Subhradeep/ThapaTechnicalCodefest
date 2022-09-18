import { Grid } from "@mui/material";
import React from "react";
import { Dataleft, DataRight, SeeAllData } from "../Static/Js/Datas";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Tooltip from "@mui/material/Tooltip";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { WebplanWrapper } from "../Styles/UpperBodyStyles/Webplan.styled";
import { motion } from "framer-motion";
const DatamappigSeeall = () => {
  return (
    <>
      {/* <WebplanWrapper> */}
      {/* <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ease:"linear",duration:1 }}
      > */}
        <Grid container className="see-all-main-grid">
          <Grid item xs={0} sm={5.9} md={3.9} className="see-all-container">
            <div className="see-all-container-div">
              {SeeAllData.map((data, index) => {
                return (
                  <>
                    <div className="specs" key={index}>
                      <TaskAltIcon
                        sx={{
                          color: "green",
                          padding: "0px 2px",
                          mr: "4px",
                        }}
                      />

                      <b>{data.headBold}&nbsp;</b>
                      <p>{data.header}</p>
                      <Tooltip title={data.tooltip} arrow>
                        <HelpOutlineIcon sx={{ padding: "5px" }} />
                      </Tooltip>
                    </div>
                  </>
                );
              })}
            </div>
          </Grid>
          <div className="border-between-grid-lower  off-at-xs"></div>
          <Grid
            item
            xs={0}
            sm={5.9}
            md={3.9}
            className="see-all-container off-at-xs"
          >
            <div className="see-all-container-div">
              {SeeAllData.map((data, index) => {
                return (
                  <>
                    <div className="specs" key={index}>
                      <TaskAltIcon
                        sx={{
                          color: "green",
                          padding: "0px 2px",
                          mr: "4px",
                        }}
                      />

                      <b>{data.headBold}&nbsp;</b>
                      <p>{data.header}</p>
                      <Tooltip title={data.tooltip} arrow>
                        <HelpOutlineIcon sx={{ padding: "5px" }} />
                      </Tooltip>
                    </div>
                  </>
                );
              })}
            </div>
          </Grid>
          <div className="border-between-grid-lower off-at-sm"></div>
          <Grid
            item
            xs={0}
            sm={0}
            md={3.9}
            className="see-all-container off-at-sm"
          >
            <div className="see-all-container-div">
              {SeeAllData.map((data, index) => {
                return (
                  <>
                    <div className="specs" key={index}>
                      <TaskAltIcon
                        sx={{
                          color: "green",
                          padding: "0px 2px",
                          mr: "4px",
                        }}
                      />

                      <b>{data.headBold}&nbsp;</b>
                      <p>{data.header}</p>
                      <Tooltip title={data.tooltip} arrow>
                        <HelpOutlineIcon sx={{ padding: "5px" }} />
                      </Tooltip>
                    </div>
                  </>
                );
              })}
            </div>
          </Grid>
        </Grid>
      {/* </motion.div> */}
      {/* </WebplanWrapper> */}
    </>
  );
};

export default DatamappigSeeall;
