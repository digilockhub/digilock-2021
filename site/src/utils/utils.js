// import LOCALES from '../constants/locales'

export function generateNumber(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

// export function returnRouteName(route) {
//   let routeName = route.split('/')
//
//   routeName.shift()
//   routeName.pop()
//   // console.log(routeName);
//   let locales = Object.keys(LOCALES);
//   for(const key of locales) {
//     if(key === routeName[0]) {
//       routeName.shift();
//     }
//   }
//
//   if(routeName.length === 0) {
//     return 'home';
//   }
//   //CRAPPY WORKAROUND
//   if(routeName[1] === 'packagehold') {
//     return 'products-packagehold'
//   }
//
//   if(routeName[1] === 'juicebar') {
//     return 'products-juicebar'
//   }
//
//   return routeName.join('-');
// }

export function doesRouteHaveDirectory(dirName) {
  if(typeof window !== 'undefined') {
    return document.location.pathname.indexOf(dirName) > -1;
  }
}

export function isNameInPath(name) {
  let returnValue = false;
  if(typeof window !== 'undefined') {
    if (document.location.pathname.indexOf(name) > -1) {
      returnValue = true;
    }
  }
  return returnValue;
}

export function createMarkup(markup) {
  return {__html: markup};
}

export function returnLockerOrFurniture() {
  return document.location.pathname.indexOf('nextlock') > -1 ? 'locker' : 'furniture';
}

export function replaceCharWithChar(s, find, replace) {
  if(typeof s === 'string' || s instanceof String) {
     return s.split(find).join(replace);
  } else {
    return 'no-id-given';
  }
}

export function returnLockerOrFurnitureBasedOnProduct() {


  let path = '';
  // Wrap the require in check for window
  if (typeof document !== `undefined`) {
    path = document.location.pathname;
  }

  switch (true) {
    case (path.indexOf('axis') >-1):
      return 'locker';
    case (path.indexOf('classic') >-1):
      return 'locker';
    case (path.indexOf('cue') >-1):
      return 'locker';
    case (path.indexOf('mech') >-1):
      return 'locker';
    case (path.indexOf('sola') >-1):
      return 'locker';
    case (path.indexOf('aspire') >-1):
      return 'furniture';
    case (path.indexOf('versa-mini') >-1):
      return 'furniture';
    case (path.indexOf('versa-standard') >-1):
      return 'furniture';
    default:
      return;
  }

}

//accepts two date string formatted like "MMMM DD, YYYY"
export function returnStartAndEndDate(start, end) {
  let dateArr = start.split(' ')
  let dateName = dateArr[0]
  let dateYear = dateArr[2]
  let dateStart = dateArr[1]
  dateStart = dateStart.replace(',', ' -')
  let dateEnd = end.split(' ')[1].replace(',', ' ')
  return dateName + ' ' + dateStart + dateEnd + dateYear
}

//GET LOCATION
export function getLocation() {
  return window.location.pathname;
}

//WORKAROUND FOR BUILD ERROR FOR LOCALES
export function ffb() {
   return typeof window !== 'undefined';
}

//RETURN LOCALE URL
export function returnLocaleURL(selectedLanguage, url) {
  let destination = '';
  if(selectedLanguage === 'en') {
    destination = url;
  } else {
    destination = '/'+selectedLanguage+url;
  }
  return destination;
}

//CONCATENATE LOCATION FROM ARRAY STARTING AT OFFSET
// export function concateLocation(arr, lang) {
//
//   let loc = arr.toString()
//   let newLoc = loc.replace(/,/g, '/')
//   const keys = Object.keys(LOCALES);
//
//   if (lang !== 'en') {
//     for (const key of keys) {
//       let str = '/'+key+'/';
//       if(newLoc.indexOf(str) > -1) {
//         newLoc = newLoc.slice(3, newLoc.length);
//       }
//     }
//     newLoc = '/' + lang + newLoc
//   } else {
//     newLoc = newLoc.slice(3, newLoc.length)
//   }
//    return newLoc
// }



//ACCORDION UTILITIES
export function jumpAccordion (whichAccordion, secondAccordion)  {
  if(arguments.length === 1) {
    let el = document.getElementById(replaceCharWithChar(whichAccordion, ' ', '-'));
    el.click();
    // scrollElementToView(el);
  } else {
    let el = document.getElementById(replaceCharWithChar(whichAccordion, ' ', '-'));
    el.click();
    setTimeout(function() {
      let el2 = document.getElementById(replaceCharWithChar(secondAccordion, ' ', '-'));
      el2.click();
      // scrollElementToView(el2);
    }, 200)
  }
}

export function scrollElementToView(el) {
  //stub
}

export function cumulativeOffset(el) {
  let rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

export function filterSupportObject(stuffs, whichStuff) {
  let returnStuff = stuffs.filter(stuff => {
    return stuff.title.indexOf(whichStuff) > -1;
  })
  if(returnStuff.length > 0) {
    return returnStuff;
  } else {
    return stuffs;
  }
}

export function triggerClickEvent (elem) {
  // console.log('elem', elem);
  let evt = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  });
  let canceled = !elem.dispatchEvent(evt);
}






//END ACCORDION UTILITIES