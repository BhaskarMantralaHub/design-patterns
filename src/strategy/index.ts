class StaticTestClass {

    static method1() {
        console.log('Inside Method1'); 
    }

    static method2() {
        console.log('Inside Method2'); 
    }

}

const strategy = "method1";

StaticTestClass[strategy]();