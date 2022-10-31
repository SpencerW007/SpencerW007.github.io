// Question 1
let Employees = [
{
"FirstName" : "Sam",
"Department" : "Tech",
"Designation" : "Manager", 
"Salary" : 40000,
"RaiseEligible" : true,
},
{
"FirstName" : "Mary",
"Department" : "Finance",
"Designation" : "Trainee", 
"Salary" : 18500,
"RaiseEligible" : true,
},
{
"FirstName" : "Bill",
"Department" : "HR",
"Designation" : "Executive", 
"Salary" : 25600,
"RaiseEligible" : false,
},
]
console.log(Employees);

//Question 2
let Company = [
{'CompanyName': 'Tech Stars',
 'website': 'www.techstars.site',
 'Employees': [
    {
    "FirstName" : "Sam",
    "Department" : "Tech",
    "Designation" : "Manager", 
    "Salary" : 40000,
    "RaiseEligible" : true,
    },
    {
    "FirstName" : "Mary",
    "Department" : "Finance",
    "Designation" : "Trainee", 
    "Salary" : 18500,
    "RaiseEligible" : true,
    },
    {
    "FirstName" : "Bill",
    "Department" : "HR",
    "Designation" : "Executive", 
    "Salary" : 25600,
    "RaiseEligible" : false,
    } ]
}
    ]
    console.log(Company);
    
    //Question 3
    Employees = [
        {
        "FirstName" : "Sam",
        "Department" : "Tech",
        "Designation" : "Manager", 
        "Salary" : 40000,
        "RaiseEligible" : true,
        },
        {
        "FirstName" : "Mary",
        "Department" : "Finance",
        "Designation" : "Trainee", 
        "Salary" : 18500,
        "RaiseEligible" : true,
        },
        {
        "FirstName" : "Bill",
        "Department" : "HR",
        "Designation" : "Executive", 
        "Salary" : 25600,
        "RaiseEligible" : false,
        },
        {"FirstName" : "Anna",
        "Department" : "Tech",
        "Designation" : "Executive", 
        "Salary" : 21200,
        "RaiseEligible" : false,
        }
        ]
        console.log(Employees);

     Company = [
            {'CompanyName': 'Tech Stars',
             'website': 'www.techstars.site',
             'Employees': [
                {
                "FirstName" : "Sam",
                "Department" : "Tech",
                "Designation" : "Manager", 
                "Salary" : 40000,
                "RaiseEligible" : true,
                },
                {
                "FirstName" : "Mary",
                "Department" : "Finance",
                "Designation" : "Trainee", 
                "Salary" : 18500,
                "RaiseEligible" : true,
                },
                {
                "FirstName" : "Bill",
                "Department" : "HR",
                "Designation" : "Executive", 
                "Salary" : 25600,
                "RaiseEligible" : false,
                },
                {"FirstName" : "Anna",
                "Department" : "Tech",
                "Designation" : "Executive", 
                "Salary" : 21200,
                "RaiseEligible" : false,
                }
            ]
            } ]
 console.log(Company)

//Question 4
 Employees = [
    {
    "FirstName" : "Sam",
    "Department" : "Tech",
    "Designation" : "Manager", 
    "Salary" : 40000,
    "RaiseEligible" : true,
    },
    {
    "FirstName" : "Mary",
    "Department" : "Finance",
    "Designation" : "Trainee", 
    "Salary" : 18500,
    "RaiseEligible" : true,
    },
    {
    "FirstName" : "Bill",
    "Department" : "HR",
    "Designation" : "Executive", 
    "Salary" : 25600,
    "RaiseEligible" : false,
    },
    {"FirstName" : "Anna",
    "Department" : "Tech",
    "Designation" : "Executive", 
    "Salary" : 21200,
    "RaiseEligible" : false,
    }
    ]

    let TotalSalary = 0
    for (let i = 0; i < Employees.length; i++){
    TotalSalary += Employees[i].Salary
    }

console.log(TotalSalary)


//Question 5
Company = [
    {'CompanyName': 'Tech Stars',
     'website': 'www.techstars.site',
     'Employees': [
        {
        "FirstName" : "Sam",
        "Department" : "Tech",
        "Designation" : "Manager", 
        "Salary" : 40000,
        "RaiseEligible" : true,
        },
        {
        "FirstName" : "Mary",
        "Department" : "Finance",
        "Designation" : "Trainee", 
        "Salary" : 18500,
        "RaiseEligible" : true,
        },
        {
        "FirstName" : "Bill",
        "Department" : "HR",
        "Designation" : "Executive", 
        "Salary" : 25600,
        "RaiseEligible" : false,
        },
        {"FirstName" : "Anna",
        "Department" : "Tech",
        "Designation" : "Executive", 
        "Salary" : 21200,
        "RaiseEligible" : false,
        }
    ]
    } ]

for (let i = 0; i < Company[0].Employees.length; i++){
if (Company[0].Employees[i].RaiseEligible) {
Company[0].Employees[i].Salary *= 1.1;
Company[0].Employees[i].RaiseEligible = false
}
}
console.log(Company)

//Question 6

Company = [
    {'CompanyName': 'Tech Stars',
     'website': 'www.techstars.site',
     'Employees': [
        {
        "FirstName" : "Sam",
        "Department" : "Tech",
        "Designation" : "Manager", 
        "Salary" : 44000,
        "RaiseEligible" : false,
        'wfh' : true
        },
        {
        "FirstName" : "Mary",
        "Department" : "Finance",
        "Designation" : "Trainee", 
        "Salary" : 20350,
        "RaiseEligible" : false,
        'wfh' : false,
        },
        {
        "FirstName" : "Bill",
        "Department" : "HR",
        "Designation" : "Executive", 
        "Salary" : 25600,
        "RaiseEligible" : false,
        'wfh' : false
        },
        {"FirstName" : "Anna",
        "Department" : "Tech",
        "Designation" : "Executive", 
        "Salary" : 21200,
        "RaiseEligible" : false,
        'wfh' : true
        }
    ]
    } ]

console.log(Company)