import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { lgCPButtHeadSpacing, smCPButtHeadSpacing } from "../utils/vars";

const useStyles = makeStyles({
  sliderSmall: {
    height: 150,
  },
  sliderLarge: {
    width: 200,
  },
});

export default function FramesRangeInput({ state, setState }) {
  const { isSmallScreen, framesRange } = state;
  const { setFramesRange } = setState;

  function handleChange(e, arr) {
    setFramesRange({ min: arr[0], max: arr[1] });
  }

  function valuetext(value, index) {
    return `${value}`;
  }

  const classes = useStyles();

  const marks = [
    {
      value: framesRange["min"],
      label: framesRange["min"],
    },
    {
      value: framesRange["max"],
      label: framesRange["max"],
    },
  ];
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      spacing={isSmallScreen ? smCPButtHeadSpacing : lgCPButtHeadSpacing}
    >
      <Grid item>
        <div
          className={isSmallScreen ? classes.sliderSmall : classes.sliderLarge}
        >
          <Slider
            max={30}
            orientation={isSmallScreen ? "vertical" : "horizontal"}
            defaultValue={[10, 25]}
            aria-labelledby="track-inverted-range-slider"
            getAriaValueText={valuetext}
            marks={marks}
            onChange={handleChange}
          />
        </div>
      </Grid>
    </Grid>
  );
}
