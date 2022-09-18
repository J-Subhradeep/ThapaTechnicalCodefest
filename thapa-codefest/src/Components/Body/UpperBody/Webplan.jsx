import React, { useState } from "react";
import { WebplanWrapper } from "../Styles/UpperBodyStyles/Webplan.styled";
import Grid from "@mui/material/Grid";
import { Dataleft, DataRight, SeeAllData } from "../Static/Js/Datas";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import DatamappigSeeall from "./DatamappigSeeall";
const Webplan = () => {
  const [state, setstate] = useState(false);
  return (
    <WebplanWrapper>
      <div className="writeUp-WP">
        <p className="heading-WU">All-In-One Web Hosting</p>
        <p className="desp-WU">
          We prepared the best web hosting plan for you to start. You will be
          able to adjust plans as you go - our custom-built algorithm will
          provide suggestions based on your usage.
        </p>
      </div>

      <div className="webplan-grid-main-container">
        <Grid container className="webplan-grid-main">
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            className="webplan-grid-main-header"
          >
            <p>Best Web Hosting</p>
          </Grid>
          <Grid item xs={0} sm={0} md={4} className="data-grid-main off-at-sm">
            <div className="data-grid-main-div">
              {DataRight.map((data, index) => {
                return (
                  <div className="specs" key={index}>
                    <TaskAltIcon
                      sx={{ color: "green", padding: "0px 2px", mr: "4px" }}
                    />

                    <b>{data.headBold}&nbsp;</b>
                    <p>{data.header}</p>
                    <Tooltip title={data.tooltip} arrow>
                      <HelpOutlineIcon sx={{ padding: "5px" }} />
                    </Tooltip>
                  </div>
                );
              })}
            </div>
          </Grid>
          <div className="border-between-grid off-at-sm"></div>

          <Grid item xs={12} sm={5.9} md={3.9} className="data-grid-main">
            <div className="data-grid-main-div">
              <div className="pricing-grid-main">
                <div className="pricing-grid">
                  <CurrencyRupeeIcon />
                  <b className="price pricing-grid-main">149.00</b>
                  <span>/mo</span>
                </div>
                <b>₹249.00/mo when you renew</b>
                <Button
                  variant="contained"
                  className="btn-select-pricing-grid-main"
                >
                  Select
                </Button>
              </div>
            </div>
          </Grid>
          <div className="border-between-grid off-at-xs"></div>
          <Grid item xs={0} sm={5.9} md={3.9} className="data-grid-main">
            <div className="data-grid-main-div">
              {Dataleft.map((data, index) => {
                return (
                  <div className="specs" key={index}>
                    <TaskAltIcon
                      sx={{ color: "green", padding: "0px 2px", mr: "4px" }}
                    />

                    <b>{data.headBold}&nbsp;</b>
                    <p>{data.header}</p>
                    <Tooltip title={data.tooltip} arrow>
                      <HelpOutlineIcon sx={{ padding: "5px" }} />
                    </Tooltip>
                  </div>
                );
              })}
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} className="seeall-grid-main">
            {state ? <h1>Plan Features</h1> : <></>}
            <div>{state ? <DatamappigSeeall /> : <></>}</div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} className="see-all-grid-header">
            {!state ? (
              <p
                onClick={() => {
                  setstate(!state);
                }}
              >
                See All Features
              </p>
            ) : (
              <p
                onClick={() => {
                  setstate(!state);
                }}
              >
                See Less
              </p>
            )}
          </Grid>
        </Grid>
      </div>
    </WebplanWrapper>
  );
};

export default Webplan;
