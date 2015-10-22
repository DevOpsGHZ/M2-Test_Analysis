var esprima = require("esprima");
var options = {tokens:true, tolerant: true, loc: true, range: true };
var fs = require("fs");
var token = "sdofhsaohgojsjsohfuqierqwtklasgoijgjdifgjoiahsodfhoijwjer";
function main()
{
	var args = process.argv.slice(2);

	if( args.length == 0 )
	{
		args = ["subject.js"];
	}
	var filePath = args[0];

	// checking(filePath);
	// console.log(process.env.PWD);
	var git = fs.readFileSync("stage.txt", "utf8");
	// console.log(git.split('\n'));
	lines = git.split('\n');
	flag = 0;
	for(var i = 0; i < lines.length; i++)
	{
		if( lines[i] == 'Changes to be committed:')
		{
			flag = i;
			break;
		}
	}
	var new_file = []
	for( var i = flag+3; i < lines.length; i++)
	{
		if(lines[i].length > 3)
		{
			// console.log(lines[i].split('   '));
			if(lines[i].split('   ')[0].indexOf('new file') > -1 || lines[i].split('   ')[0].indexOf('modified') > -1)
			{
				new_file.push(lines[i].split('   ')[1]);	
			}
		}
		else
		{
			break;
		}
	}
	if(new_file.length > 0) console.log("Files to be committed: ", new_file);

	var suspects = [];
	for( var i = 0; i < new_file.length; i++)
	{
		if( new_file[i].indexOf('.') > -1)
		{
			var tmp = new_file[i].split('.');
			var type = tmp[tmp.length - 1];
			// console.log(type);
			if(type.toLowerCase() == 'js')
			{
				var tmp = checking(new_file[i]);
				for(var j = 0; j < tmp.length; j++) suspects.push(tmp[j]);
			}
			else if(type.toLowerCase() == 'json')
			{
				// console.log(new_file[i]);
				var json_data = require('./package.json');
				// console.log(json_data);
				traverse_json(json_data,function(key, value)
				{
					if(typeof value == 'string' && value.indexOf('http') < 0 
						&& value.length > 20 && value.indexOf(' ') < 0)
					{
						// console.log(value);	
						suspects.push(value);
					}
				});
			}
			else if(type.toLowerCase() == 'pem' || type.toLowerCase() == 'key')
			{
				var key = fs.readFileSync(new_file[i], "utf8");
				suspects.push(key);
			}
		}
		else
		{
			var content = fs.readFileSync(new_file[i], "utf8");
			if(content.length > 100 
				&& (content.indexOf('ssh-rsa') > -1 || content.indexOf('PRIVATE KEY') > -1))
			{
				suspects.push(content);
			}
		};

	};
	console.log(suspects);
	// Report
	// for( var node in builders )
	// {
	// 	var builder = builders[node];
	// 	builder.report();
	// }

}

function checking(filePath)
{
	var buf = fs.readFileSync(filePath, "utf8");
	var ast = esprima.parse(buf, options);
	var suspect = []
	traverse(ast, function(node)
	{
		if( node.type == 'Literal')
		{
			// console.log(node.value);
			if(node.value !== null && node.value.length > 20 && node.value.indexOf(' ') < 0)
			{
				// console.log(node.loc);
				suspect.push(node.value);
			}
		}
	// 	if( node.type == 'VariableDeclaration' )
	// 	{
	// 		// console.log(node.declarations);
	// 		for(var i = 0; i < node.declarations.length; i++)
	// 		{
	// 			if(node.declarations[i].init !== null && node.declarations[i].init.type == 'Literal')
	// 			{
	// 				var tmp = node.declarations[i].init.value;
	// 				console.log(node.declarations[i].init.value);
	// 				if(tmp !== null && tmp.length > 10)
	// 				{
	// 					suspect.push(tmp);
	// 				}
	// 			}
	// 		}
	// 	}

	// 	if(node.type == 'AssignmentExpression' && node.right.type == 'Literal')
	// 	{
	// 		console.log(node.right.value)
	// 		if(node.right.value > 10)
	// 		{
	// 			suspect.push(tmp);
	// 		}
	// 	}
	});
	// console.log(suspect);
	return suspect;
}

function traverse(object, visitor) 
{
    var key, child;

    visitor.call(null, object);
    for (key in object) {
        if (object.hasOwnProperty(key)) {
            child = object[key];
            if (typeof child === 'object' && child !== null) {
                traverse(child, visitor);
            }
        }
    }
}

// A function following the Visitor pattern but allows canceling transversal if visitor returns false.
function traverseWithCancel(object, visitor)
{
    var key, child;

    if( visitor.call(null, object) )
    {
	    for (key in object) {
	        if (object.hasOwnProperty(key)) {
	            child = object[key];
	            if (typeof child === 'object' && child !== null) {
	                traverseWithCancel(child, visitor);
	            }
	        }
	    }
 	 }
}
// function process_json(key,value) {
//     console.log(key + " : "+value);
// }

function traverse_json(o,func) {
    for (var i in o) {
        func.apply(this,[i,o[i]]);  
        if (o[i] !== null && typeof(o[i])=="object") {
            traverse_json(o[i],func);
        }
    }
}

main();