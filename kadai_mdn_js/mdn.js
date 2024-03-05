const time = new Date();

console.log(time);

const currentDate = () => {
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const date = time.getDate();

    console.log(year + '年' + month + '月' + date + '日');
}

currentDate();
