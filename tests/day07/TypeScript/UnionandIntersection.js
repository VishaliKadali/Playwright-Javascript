//union -> OR condition 
var code = 50;
var status1 = 'OK';
var browserName;
browserName = 'chrome';
browserName = null;
var value = {
    adminname: "Testleaf",
    adminId: 57,
    // cusId:78,
    cusname: 'Dilip',
};
//optional = value 
//cusID? => '?' -> optional value 
//optional parameter should not given in-between, it should be last parameter
function empdetails(empname, empid, empstatus) {
    console.log(empname + " " + empid + " " + empstatus);
}
empdetails("Dilip", 98);
empdetails("Testleaf", 67, true);
