function dosomething() {
    return new Promise((res) => {
        setTimeout(() => {
            res('Hello World');
        }, 2000);
    });
}

async function waiting() {
    console.log('calling doSomething...');
    const result = await dosomething();
    console.log(result);
}


waiting();