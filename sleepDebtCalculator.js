function getSleepHours(day) {
    const one = 7; const two = 7; const three = 7; const four = 7; const five = 6; const six = 6; const seven = 7;
    switch(day) {
      case day = 'monday':
        return one;
        break;
      case day = 'tuesday':
        return two;
        break;
      case day = 'wednesday':
        return three;
        break;
      case day = 'thursday':
        return four;
        break;
      case day = 'friday':
        return five;
        break;
      case day = 'saturday':
        return six;
        break;
      default:
        return seven;
        break;
    }
  }
  
  function getActualSleepHours() {
      totalSleep = 0;
    totalSleep += getSleepHours('monday');
    totalSleep += getSleepHours('tuesday');
    totalSleep += getSleepHours('thursday');
    totalSleep += getSleepHours('wednesday');
    totalSleep += getSleepHours('saturday');
    totalSleep += getSleepHours('sunday');
    totalSleep += getSleepHours('friday');
    return totalSleep;
  }
  console.log(getActualSleepHours());
  
  function getIdealSleepHours() {
    const idealHours = 8;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    console.log(idealSleepHours);
    if (actualSleepHours === idealSleepHours){
      console.log('you got the perfect amount of sleep!');
    }else if(actualSleepHours < idealSleepHours){
         console.log(actualSleepHours);
      console.log(idealSleepHours);
      let difference = idealSleepHours - actualSleepHours;
      console.log(difference);
          console.log('you should get some rest, you are '+ difference +' hours short.');
    }else if (actualSleepHours > idealSleepHours){
      let difference = actualSleepHours - idealSleepHours;
      console.log('you got '+difference+' extra hours of sleep.');
    }
  }
  calculateSleepDebt();