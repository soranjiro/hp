const courses = {
    11: 'https://www.cle.osaka-u.ac.jp/ultra/courses/_170535_1/cl/outline',
    21: 'https://www.cle.osaka-u.ac.jp/ultra/courses/_170605_1/cl/outline',
    23: 'https://www.cle.osaka-u.ac.jp/ultra/courses/_170555_1/cl/outline',
    24: 'https://www.cle.osaka-u.ac.jp/ultra/courses/_170509_1/cl/outline',
    32: 'https://www.cle.osaka-u.ac.jp/ultra/courses/_170612_1/cl/outline',
    33: 'https://www.cle.osaka-u.ac.jp/ultra/courses/_170566_1/cl/outline',
    34: 'https://www.cle.osaka-u.ac.jp/ultra/courses/_170613_1/cl/outline',
    35: 'https://www.cle.osaka-u.ac.jp/ultra/courses/_170629_1/cl/outline',
    41: 'https://www.cle.osaka-u.ac.jp/ultra/courses/_170603_1/cl/outline',
    42: 'https://www.cle.osaka-u.ac.jp/ultra/courses/_170567_1/cl/outline',
    43: 'https://www.cle.osaka-u.ac.jp/ultra/courses/_170629_1/cl/outline',
    44: 'https://www.cle.osaka-u.ac.jp/ultra/courses/_170629_1/cl/outline',
    51: 'https://www.cle.osaka-u.ac.jp/ultra/courses/_170560_1/cl/outline',
    53: 'https://www.cle.osaka-u.ac.jp/ultra/courses/_170606_1/cl/outline',
    55: 'https://www.cle.osaka-u.ac.jp/ultra/courses/_170606_1/cl/outline'
}

for (const id in courses) {
    const element = document.getElementById(id);
    if (element) {
        element.onclick = function () {
            window.location.href = courses[id];
        }
    }
}




