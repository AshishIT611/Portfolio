from flask import Flask,render_template,request
from flask_mysqldb import MySQL
from flask_cors import CORS
app=Flask(__name__)
CORS(app)
app.config["MYSQL_HOST"]="localhost"
app.config["MYSQL_USER"]="root"
app.config["MYSQL_PASSWORD"]="ashish143@"
app.config["MYSQL_DB"]="portfolio"
mysql=MySQL(app)
@app.route("/",methods=["GET","POST"])
def home():
    success=None
    if request.method=="POST":
        name=request.form["name"]
        email=request.form["email"]
        message=request.form["message"]
        try:
            cur=mysql.connection.cursor()
            cur.execute("INSERT INTO portfolio VALUES(%s,%s,%s)",(name,email,message))
            mysql.connection.commit()
            cur.close()
            success=True
        except Exception as e:
            success=f"Error:{str(e)}"
    return render_template("index.html")
if __name__=="__main__":
    app.run(debug=True)