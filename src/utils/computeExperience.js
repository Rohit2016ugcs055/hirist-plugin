export const computeExperiences = (value) => {
    let minExp = 0;
    let maxExp = 0;
    if (value.indexOf('-') > 0) {
      minExp = parseInt(value.substr(0, value.indexOf('-') - 1), 10);
      maxExp = parseInt(value.substr(value.indexOf('-') + 1, value.length), 10);
    } else if (value.indexOf('+') > 0) {
      minExp = parseInt(value.substr(0, value.indexOf('+')), 10);
      maxExp = 30;
    } else {
      minExp = 0;
      maxExp = 0;
    }
  
    return { minExp, maxExp };
  }
  
  export const findIndexByExperience = (minexp) => {
    let exp = 1;
    if(minexp <= 3) {
      exp = 1;
    } else if (minexp >= 4 && minexp <= 6) {
      exp = 2;
    } else if (minexp >= 7 && minexp <= 10) {
      exp = 3;
    } else if (minexp >= 11 && minexp <= 15) {
      exp = 4;
    } else if (minexp >= 15) {
      exp = 5;
    }
    return exp;
  }
  
  export const getExperienceRange = (exp) => {
    let min = 0, max = 0;
    if(exp >= 0 && exp <= 3) {
      min = 1;
      max = 3;
    } else if(exp >= 4 && exp <= 6) {
      min = 4;
      max = 6;
    } else if(exp >= 7 && exp <= 10) {
      min = 7;
      max = 10;
    } else if(exp >= 11 && exp <= 15) {
      min = 11;
      max = 15;
    } else if(exp > 15){
      min = 15; 
    }
    
    return { min, max };
  }
  