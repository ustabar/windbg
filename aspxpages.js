function log(logItem) { 
  host.diagnostics.debugLog(logItem + "\n"); 
}

function exec (cmdstr) {
  return host.namespace.Debugger.Utility.Control.ExecuteCommand(cmdstr);    
}

function getLongRunningReqs() {
  var cmdOutput = exec("!aspxpagesext");

  for ( line of cmdOutput ) {
    var token = line.split(" ");

    // 9th item shows "yes" or "no" if request is completed or not
    // check if item is available

    if ( token[9]!=undefined ) {
      try {

        // if the request is not completed yet

        if ( token[9].includes("no") ) { 

          // then log the line to the console

          log(line); 
        }
      }
      catch( err ) {

        // if there is any error then handle it

      }
    }
  }
}
