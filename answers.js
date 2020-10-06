//Please put your answers here
/* 
    1. The code is going to return an array that passes the tests inside the paranthesis. 
    The first filter is taking in q as allQuestions and the code is checking if
    allQuestions.subThreadName has the same name as the currentQuestion.subThreadname. Based
    on that the code will filter those solutions to a new filter where the solutions from the
    previous filter are represented by q. The code is checking if the previous solutions.mrLevel
    is the same as currentQuestion.mrLevel. The solutions from this filter will be passed to
    a some method that will take in the previous filter method as q. Some will check if the
    previous filter solutions.currentAnswer is equal to "No". If it is then some will return
    the value true. Since the code starts with a ! the code will return the opposite of what 
    the original filter method was returning. So if the code from the some returns true then some
    will return false. Our final will be an array of true and false values flipped by !.

    2. The code is saving a variable called oldAssessment which is going through all the 
    values in allQuestions with a map method and saving those values as q. Using the object
    assign method the code is replacing any empty objects that are found with q.

    3. The code is being saved in a const called old where the content in allQuestions is
    being cycled though in a map method where all the values in allQuestions is represented
    as question. Inside the map method is a function that takes in a question from allQuestions
    and the function will return the spread operator of all the questions. Meaning all the
    questions being cycled through will be displayed from first to last question.

    4. I would create a filter method that takes in the value of the array and checks if the
    value is equal to null or not. If the value is not equal to null then I will put it onto
    our new array. Once all the values have been iterated through and the code joins all the
    non-null values together I will retur that array. 

        arr.filter(function(val) { return val !== null; }).join(", ")

    5. In the parent component we need to create:
        export class ParentComponent{
            header: any[] =[{
                headerMessage: 'message'
            }]
        }

        Then in the child component we need to create:
        import {Component, Input} from '@angular/core';

        @Component({
            selector: 'child'
        })

        export class ChildComponent{
            Input()headerMessage: string
        }

        Then in file 1 we need to type where <header-component /> is:
        <child [headerMessage]="header.headerMessage"></child>

        Then in file 2 wehere the HERE is we can display:
        <p>{{headerMessage}}</p>

        Concept: 
        First we need to create a parent component that stores the information of the data
        we wish to pass down. By exporting a class with the information header and inside header
        we give the information headerMessage saving the value as 'message'. Then we create
        a child component that takes in Component and Input from angular/core. The component
        is selecting a child and exporting a class that takes an input of information with the
        variable type as a string. Then in file 1 we need to pass that information down to our 
        child HTML file in file 2, so we use the child component and pass the prop headerMessage
        with the exact parent component and value. Finally we display that message we inherited from
        our parent component in file 2 simply as the value headerMessage, so we will see 'message'
        displayed on our web page.
*/
