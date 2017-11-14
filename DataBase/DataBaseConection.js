class dataBaseConection{

	constructor(){
		this.mysql = require('mysql');
		this.conection = mysql.createConection({
			host: "localhost",
			user: "root",
			password: "53dcc7dd"
		})
		this.conection.connect((err) => {
			if(err) throw err;
			console.log("Connected!");
		})
	}

}