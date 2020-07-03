import React from "react";
// import Button from 'react-bootstrap/Button';

const Form = () => {

    return (
        <div class="container">
            <h2 class="text-center">Company Registration</h2>
            <form class="form-horizontal" action="/action_page.php">
                <div class="form-group">
                    <label class="control-label col-sm-2" for="companyName">Company</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="companyName" placeholder="Enter Company Name" name="companyName" />
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="companyLogo">Logo</label>
                    <div class="col-sm-10">          
                        <input type="text" class="form-control" id="companyLogo" placeholder="Enter Company's Logo" name="companyLogo"/>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="assignment">No. of Assignments</label>
                    <div class="col-sm-10">          
                        <input type="number" class="form-control" id="assignment" placeholder="Enter the number of assignments" name="assignment"/>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="opening">No. of opening</label>
                    <div class="col-sm-8">          
                        <input type="number" class="form-control" id="opening" placeholder="Enter the number of openings" name="opening"/>
                    </div>
                    <div class="col-sm-2">
                        <button class="btn btn-info" onClick={(e)=>(e.preventDefault())}>Yet To be Uploaded</button>
                    </div>
                </div>
                
                <div class="form-group">
                    <label class="control-label col-sm-2" for="companyDesc">Company Description</label>
                    <div class="col-sm-10">          
                    <textarea class="form-control" id="companyDesc" placeholder="Enter the Company Description" name="companyDesc" style={{height: 150}}/>
                    </div>
                </div>

                <div class="form-group">        
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
                </div>
            </form>
        </div>
    );
};

export default Form;