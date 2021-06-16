
# Project-3-Carbon Emissions Predictor
## IMPACT OF NOT ELECTRIFYING TRANSPORTATION IN THE UNITED STATES


This project uses machine learning to determine the predictability of carbon emissions in the transportation sector if vehicles with internal combustion engines continue to be the primary type.

![header](static/img/ev_banner.png)

### View the <a href ="https://nbullerds.github.io/ml_co_emission_equiv_prediction">Carbon Emissions Predictor</a> on GitHup Pages.
---

## Project Team
* Nick Buller: <a href="https://github.com/nbullerds" target="_blank">github.com/nbullerds</a>, <a href="mailto:nabuller@gmail.com">nabuller@gmail.com</a>
* Kerry Harp: <a href="https://github.com/klharp" target="_blank">github.com/klharp</a>, <a href="mailto:kharp@umn.edu">kharp@umn.edu</a>
* Matt Killeen: <a href="https://github.com/matthewkilleen0830" target="_blank">github.com/matthewkilleen0830</a>, <a href="matthew.killeen0830@gmail.com">matthew.killeen0830@gmail.com</a>
* Ciera Morris: <a href="https://github.com/cieranmorris" target="_blank">github.com/cieranmorris</a>, <a href="mailto:cieranmorris@gmail.com">cieranmorris@gmail.com</a>

---

## Overview

Transportation makes up 29% of the total U.S. greenhouse gas emissions. In April of 2021, President Biden announced a target of 50-52% reduction in emissions from the 2005 levels. What will the impact of GHG emission be if internal combustion vehicles are not replaced with electric vehicles?

<!-- Governmental and NGO policies during the Covid-19 pandemic changed human behavior resulting in decreased energy demand. At the peak in April of 2020, daily global CO<sub>2</sub> emissions decrease 19% compared to 2019. -->

Data from various sources was used to test-train a dataset to determine the predictability of GHG emissions due to transportation.


![predictor](static/img/predictor.png)

View the <a href ="https://nbullerds.github.io/ml_co_emission_equiv_prediction">Carbon Emissions Predictor</a> on GitHup Pages.

---
## Process
This project showcases using machine learning to make a predictions and uses visualizations to provide the user  an interactive means to explore the data.

<b>Predictive Data Analysis with Multiple Linear Regression Machine Learning</b>

Using a multiple linear regression approach, our objective was to predict GHG emissions from the transportation sector for the (5) state area known as the upper Midwest (Iowa, Minnesota, North Dakota, South Dakota, and Wisconsin).  We compiled annual transportation data for features such as vehicle miles traveled, total fuel consumption, and electric vehicle market share for each state from 1990 to 2018.  While this dataset contained roughly (16) features for each state, it was limited in terms of the amount of data to train and test a multiple linear regression model.  Ultimately, we were not satisfied with the accuracy scores of our model and we brainstormed for new ideas.

Going forward, we had decided to take the element of state-by-state data out of the model.  We then located data for the features of Gross Domestic Product, population, mass transit ridership, vehicle miles traveled, landmass area, and average high temperatures for all (50) states.  This provided us a dataset that was much more suitable for training and testing a multiple linear regression model.  The accuracy scores of the model drastically improved, and using forward looking trendlines for each feature, we were satisfied that we could accurately forecast and predict future GHG emissions through the year 2050.


<b>Regression Methodology</b>

The regression equations were developed to determine annual GHG emissions from the transportation sector in the United States.

Our regression equation was developed using the formula:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y = b<sub>0</sub> + b<sub>1</sub>(X<sub>1</sub>) + b<sub>2</sub>(X<sub>2</sub>) … b<sub>5</sub>(X<sub>5</sub>) + b<sub>6</sub>(X<sub>6</sub>)

Where:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y = annual GHG emissions from the transportation sector (dependent variable)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X<sub>1</sub> through X<sub>6</sub> = distinct independent predictor variables

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b<sub>1</sub> through b<sub>6</sub> = estimated regression coefficients
	
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b<sub>0 </sub>= the value of y when all independent predictor variables (X values) are equal to zero


<b>Website &amp; Visualizations</b>

The website uses a Bootstrap template with customized CSS and Javascript scripting.

The map is rendered from a GeoJSON file that created in Pandas by merging a GeoJSON and a CSV file. The click events are in Javascript and reference the merged GeoJSON.

The U.S. Transportation Emissions graphic uses the machine learning data that is brought into Tableau. This image displays the transportation emissions into the future, the margin of error, and the 2030 emission target. This graphic was created in Tableau and embedded in the html code.

The set of graphics in the Overview section were done in Tableau and also embedded in the html. These graphics give a visual and interactive overview of transportation use in the United States.

<b> Assumptions</b>

* GHG emissions recorded in MtCO<sub>2</sub>e (metric tons CO<sub>2</sub> equivalent) and does not take into account changes in atmospheric levels of greenhouse gases attributed to forest and land-use activities.

* Predictions are based on features with publicly available data with values between 1995 and 2018.

* The future EVs will use energy from renewable sources (solar, wind, water) and not from coal- or  gas-fired energy generation.

* Does not take into account the effects of emissions, manufacturing, or lifecycle issues of EV batteries.

---
## Project Focus
* Working as a team, demonstrated by using branches in GitHub to manage the push/merge/pull of the repository, acquiring datasets, coordinating efforts to develop the machine learning model, and preparing information for display/presentation.

* Acquiring the datasets from multiple sources.

* ETL of chosen datasets.

* Developing a machine learning model using multi-linear regressions to predict an outcome.
    *  Fitting the model

    * Tuning the model

* Creating visualizations used to demonstrate the project's intent.

* Creating a website and deploying to GitHub Pages.

* Languages and libraries used:
    * Python
    * Pandas
    * Numpy
    * Matplotlib
    * Seaborn
    * Scikit-learn
    * HTML
    * CSS
    * Bootstrap
    * D3
    * Javascript
    * Plotly
    * Leaflet
    * Tableau

---
Copyright &copy; 2021: Buller, Harp, Killeen, Morris