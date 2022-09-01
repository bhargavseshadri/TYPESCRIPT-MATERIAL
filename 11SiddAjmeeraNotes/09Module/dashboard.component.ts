import { log as mathLog , multiply  } from "./math.util";      //here we are just aliasing(changing name) the log
import {calculatedSalary , generatePayslip , log } from "./employee.service";

export default class Dashboard (){
    employeeId;

    createDashboard( ) {
    
        multiply(10,20);
        mathLog();
        calculatedSalary();
        generatePayslip();
        log();
    };
};

export function logDashboardActivities(){
    console.log(" logged dashboard activities");
    
}