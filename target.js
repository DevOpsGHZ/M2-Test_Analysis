
var fs = require("fs");

function checkLeapYear(x){
  if( x == undefined )
    return 0;

  if( x % 100 == 0 )
  {
    if( x % 400 == 0 )
    {
      return 1;
    }
    else
    {
      return 0;
    }
  }

  if( x % 4 == 0 )
  {
    return 1;
  }
  else
  {
    return 0;
  }
}

var leapMonth = [1, 3, 5, 7, 8, 10, 12];
var normalMonth = [4, 6, 9, 11];

function getTomorrowDate( year, month, day ) {
    if( month <= 0 || month > 12 || day <= 0 || day > 31 )
        return 0;

    if( leapMonth.indexOf(month) > -1 )
    {
        if( month == 12 && day == 31 ) 
        {
            year += 1;
            month = 1;
            day = 1;
        }
        else if( day == 31 )
        {
            month += 1;
            day = 1;
        }
        else
        {
            day += 1;
        }
    }
    else if( normalMonth.indexOf( month ) > -1 )
    {
        if( day > 30 )
            return 0;

        if( day == 30 )
        {
            month += 1;
            day = 0;
        }
        else
        {
            day += 1;
        }
    }
    else if( checkLeapYear( year ) )
    {
        if( day > 29 )
            return 0;

        if( day == 29 )
        {
            month += 1;
            day = 1;
        }
        else
        {
            day += 1;
        }
    }
    else
    {
        if( day > 28 )
            return 0;

        if( day == 28 )
        {
            month += 1;
            day = 1;
        }
        else
        {
            day += 1;
        }
    }

    return year.toString() + '/' + month.toString() + '/' + day.toString();
}

function extractDate(str)
{
    var re = /(\d{4})\/(\d{2})\/(\d{2})/;
    var patterns = str.match(re);

    if( !patterns || patterns.length < 3 )
        return 0;

    return {
            year: parseInt(patterns[1]), 
            month: parseInt(patterns[2]),
            day: parseInt(patterns[3]) 
            };
}


function checkResult(filePath)
{
  if (!fs.existsSync(filePath))
  {
        return 'error';
  }
  else
  {
    var buf = fs.readFileSync(filePath, "utf8");
    if( buf.length == 0 )
    {
      return 'error';
    }
    else
    {
      var index = buf.indexOf('fail');
      if (index == -1)
      {
        return false;
      }
      else
      {
        return true;
      }
    }
  }
}



exports.checkResult = checkResult;
exports.checkLeapYear = checkLeapYear;
exports.getTomorrowDate = getTomorrowDate
exports.extractDate = extractDate
