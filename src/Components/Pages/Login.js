

function Login() {
    return(
        <>
            <div className="card">
                <div className="card-body">
                    <form className="form-group">

                    <label htmlFor="username">Username:
                    <input name="username" className="form-control" style={{border: '1px solid green'}}></input>
                    </label>
                    <br/><br/>
                    <label htmlFor="password">Password:
                    <input type="password" className="form-control" style={{border: '1px solid green'}}></input>
                    </label>
                    <br/><br/>
                    <div style={{padding: '10px'}}>
                        <button className="btn btn-success">Login</button>
                    </div>
                </form>
                </div>
            </div>
            
        </>
    )
}

export default Login;