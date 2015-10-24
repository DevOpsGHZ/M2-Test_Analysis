var fs = require("fs");

function checkYear(x){
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

function checkZipCode(x){
  if(x.length == 10 && x[5] != '-')
  {
    return false;
  }
  else if(x.length != 5)
  {
    return false;
  }

  if(x.indexOf("276") === 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}

function fileTest(dir, filePath)
{
  if (!fs.existsSync(dir)){

        return false;
    }
    
    var files = fs.readdirSync(dir);
    if( files.length == 0 )
    {
        return false;
    }

   if( fs.existsSync(filePath ))
   {
    var buf = fs.readFileSync(filePath, "utf8");
    if( buf.length > 0 )
    {
      return true;
    }
    return false;
  }
}

function decode(text) {
  for(var i = 0; i < text.length; i++)
  {
    text[i] = text[i] + 1;
  }
  return text;
}

function getText(text, options) {
  if (!options || !options.decode) {
      text = decode(text);
    };
}

exports.fileTest = fileTest;
exports.checkYear = checkYear;
exports.checkZipCode = checkZipCode;
exports.getText = getText;
exports.decode = decode;

