---
title: 'National Aeronautics and Space Administration (NASA)'
date: '2020-08-01'
img: "/images/OSCAR.jpeg"
description: 'Various projects for OSCAR, a trash reforming reactor.'
tag: 'space'
author: 'Mirielle Kruger'
---

#### Summary

[OSCAR](https://www.nasa.gov/content/oscar-orbital-syngascommodity-augmentation-reactor), reminiscent of Oscar the Grouch, is a proof-of-concept waste conversion system for future use in long-duration spaceflight.  We simulated trash/waste of astronauts over the course of an ISS mission, then we burn it for conversion of a portion of the waste into gas.  I started with the OSCAR team a few weeks after OSCAR had been on a three-minute suborbital flight, so my task was to simulate the impact of microgravity (~0g) on our system via experiments on the ground.  However, various unexpected issues occurred during the flight that needed investigation.  By replicating these issues, we could separate their impact from the effects of microgravity on our results.

![OSCAR](/images/OSCAR.jpeg)


We had various experiments to simulate the flight, which generated copious amounts of data that needed processing, cleaning, and summarizing for the team.  Unfortunately, we lacked a tool that could be easily accessed by anyone, regardless of their coding abilities, to quickly retrieve important metrics and graphs for any set of tests.  Instead, we had to rely on intensive manual data processing and a paid tool that only two people on the team had access to.

One of my colleagues, knowing that I had only taken a MATLAB class before, recommended Python as an alternative for building a data analysis tool.  Although I had no familiarity with Python, I decided to learn it in my spare time while performing experiments on OSCAR during work.  Eventually, I gained enough understanding to develop a functional data analysis tool for the team piece by piece.  I leveraged libraries such as matplotlib, NumPy, pint, and pickle.

#### Purpose and Goal
Before I created this tool, we used to wait for the two people with the paid data processing tool to display different metrics and time-series data during meetings, which wasted everyone's time.  After building my tool, anyone could automatically process various metrics without the need to navigate through multiple files or possess prior coding knowledge.  This significantly improved the efficiency of meetings by 100-fold.

#### Spotlight
The raw data from each experiment consisted of time series for multiple measurements, including temperature, pressure, flow, and others, spanning the 8-minute experiment.  When the cleaning script was run on this raw data, it took approximately 5 minutes.  Consequently, it was valuable to store the cleaned data in a serialized object, such as a pickle, to facilitate quick and easy access during analysis.

#### Lessons Learned
I learned the importance of engaging with the end-users and iteratively determining their requirements.  Often, I found myself delving too deep into the development of extraneous or imprecise features.

#### Published Papers I Co-Authored at NASA
- [A Comparison of Potential Trash-to-Gas Waste Processing Systems for Long-Term Crewed Spaceflight](https://ttu-ir.tdl.org/handle/2346/87234)

- [Pioneering the Approach to Understand a Trash-to-Gas Experiment in a Microgravity Environment](https://doi.org/10.2478/gsr-2021-0006)

- [Reviewing Plasma Seed Treatments for Advancing Agriculture Applications on Earth and Into the Final Frontier](https://doi.org/10.2478/gsr-2021-0011)

