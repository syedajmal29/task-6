class Person {
    constructor(
      personName = "Dhoni",
      age = "25",
      email = "example@gmail.com",
      mobileNo = "9876543210",
      streetName = "RK street",
      area = "Radha Nagar",
      city = "Chrompet",
      district = "Chennai",
      highestQualification = "B.E",
      schoolName = "GHSS",
      sslcMark = "467/500",
      sslcYearOfCompletion = "2014",
      hscMark = "1090/1200",
      placeOfSchool = "Theni",
      hscYearOfCompletion = "2016",
      collegeName = "Engineering College",
      department = "Computer Science",
      batch = "2016-2020",
      cgpa = "6.86",
      university = "Anna University",
      placeOfCollege = "Chennai",
      technicalSkills = "JavaScript",
      companyName = "IBM",
      job = "software Developer",
      workExperience = "2 years"
    ) {
      this.personName = personName;
      this.age = age;
      this.email = email;
      this.mobileNo = mobileNo;
      this.streetName = streetName;
      this.area = area;
      this.city = city;
      this.district = district;
      this.highestQualification = highestQualification;
      this.schoolName = schoolName;
      this.placeOfSchool = placeOfSchool;
      this.sslcMark = sslcMark;
      this.sslcYearOfCompletion = sslcYearOfCompletion;
      this.hscMark = hscMark;
      this.hscYearOfCompletion = hscYearOfCompletion;
      this.collegeName = collegeName;
      this.placeOfCollege = placeOfCollege;
      this.batch = batch;
      this.department = department;
      this.cgpa = cgpa;
      this.university = university;
      this.technicalSkills = technicalSkills;
      this.companyName = companyName;
      this.job = job;
      this.workExperience = workExperience;
    }
    displayPersonalInfo() {
      console.log(
        `:::::: PERSONAL DETAILS :::::
  
        Name => ${this.personName},
        Age => ${this.age},
        email => ${this.email},
        Mobile Number => ${this.mobileNo}.`
      );
      console.log(
        `      Address :
          Street Name => ${this.streetName},
           Area => ${this.area},
            City => ${this.city},
             District => ${this.district}.`
      );
    }
    displaySchoolDetails() {
      console.log(
        `::::::: SCHOOL DETAILS :::::::
  
        School Name => ${this.schoolName},
        City => ${this.placeOfSchool},
        10th MARK => ${this.sslcMark} ,
        10th year of Completion => ${this.sslcYearOfCompletion},
        12th MARK: ${this.hscMark} ,
        12th year of Completion: ${this.hscYearOfCompletion}.
        `
      );
    }
    displayCollegeDetails() {
      console.log(
        `:::::: COLLEGE DETAILS ::::::
        
        College Name => ${this.collegeName},
        city => ${this.placeOfCollege},
        Batch => ${this.batch},
        Department => ${this.department},
        CGPA or grade => ${this.cgpa},
        University => ${this.university}.
        `
      );
    }
    displayWorkDetails() {
      console.log(
        `:::::: WORK DETAILS ::::::
        
        Company Name => ${this.companyName},
        job => ${this.job},
        Working Experience => ${this.workExperience}.
        `
      );
    }
  }
  
  const person1Details = new Person(
    "Dhivahar",
    "24",
    "dhivahar@gmail.com",
    "9898976767",
    "B.E",
    "Government Higher Secondary School",
    "467/500",
    "1123/1200",
    "College of Engineering",
    "2016-2020",
    "Electronics and Instrumentation Engineering",
    "6.86",
    "HTML5,CSS3,JavaScript,nodejs",
    "MERN stack developer",
    "3 years"
  );
  
  // console.log(person1Details);
  // console.log(new Person());
  
  const person2details = new Person();
  // person2details.displaySchoolDetails();
  // person2details.displayPersonalInfo();
  // person2details.displayCollegeDetails();
  person2details.displayWorkDetails();