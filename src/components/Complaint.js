import React from 'react'

function Complaint() {
    return (
        <div>
            <div className=" container jumbotron" style={{borderRadius:'10px',border:'2px solid black', height:'560px',width:'330px'}}>
                <form id="newForm">
                    <h1>Raise a Query</h1>
                    <div className="form-group"><label className="form-group">Roll-No</label>
                        <input type="text" className="form-control" id="Name" /></div>
                    <div className="form-group"><label className="form-group">Student Name</label><input type="text"
                        className="form-control" id="customerName" /></div>    
                    <div className="form-group"><label className="form-group">Email-ID</label>
                        <input type="email" className="form-control" id="Email" /></div>
                    <div className="form-group"><label>Department</label><select id="choseDpt" className="form-control">
                        <option value="Transport">Transport</option>
                        <option value="AEC">AEC</option>
                        <option value="Sports">Sports</option>
                        <option value="Placement-cell">Placement Cell</option>
                        <option value="Library">Library-Management</option>
                    </select></div>
                    <div className="form-group"><label className="col-sm-2 control-label">Problem</label><textarea className="form-control"
                        id="inputText" rows="3" placeholder="Problem details"></textarea></div>
                    <div className="form-group"><label className="form-group">Contact Phone</label><input type="text"
                        className="form-control" id="Contact" /></div>
                    
                    <div className="btn btn-success mt-1">SUBMIT</div>
                    <div id="status"></div>
                </form>
            </div>
        </div>
    )
}

export default Complaint