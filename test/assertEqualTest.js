const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Lighthouse Labs"); //Will return pass
assertEqual("Lighthouse Labs", "Bootcamp"); //Will return fail
assertEqual(1, 1); //Will return pass
assertEqual(1, 2); //Will return fail

