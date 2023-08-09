app.LoadPlugin( "Xml2Js" );
app.LoadPlugin( "Utils" );

function OnStart()
{
  lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

  btn = app.CreateButton( "Press Me" );
  btn.SetOnTouch( Parse );//Build );
  lay.AddChild( btn );

  plg = app.CreateXml2Js();
  utils = app.CreateUtils();

  app.AddLayout( lay );
}

function Build()
{
  var obj = utils;//{name: "Super", Surname: "Man", age: 23};
  plg.BuildString( obj, OnResult );
}

function OnResult( err, result )
{
	app.SetClipboardText( result );
  alert( result );
}


function Parse()
{
  var xml = app.ReadFile( "XML.txt" );
  //"<top id='fred' size='33'>Hello xml2js!</top>";
  plg.ParseString( xml, OnResult2 );
}

function OnResult2( err, result )
{
app.SetClipboardText( JSON.stringify(result) );
  alert( JSON.stringify(result) );
}

