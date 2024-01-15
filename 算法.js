/**
    1. 两数之和
    给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

    你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

    你可以按任意顺序返回答案。

    示例 1：

    输入：nums = [2,7,11,15], target = 9
    输出：[0,1]
    解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
    示例 2：

    输入：nums = [3,2,4], target = 6
    输出：[1,2]
    示例 3：

    输入：nums = [3,3], target = 6
    输出：[0,1]
*/
// for循环法
var twoSum = function(nums, target) {
    let arr = []
    nums.forEach((n, i) => {
        const ca = target - n
        const result = nums.findIndex((n2, i2) => {if (n2 === ca &&i2 !==i) return n2})
        if (result!==-1 && result!== i) {
            if (arr.length < 1) {arr = [i, result]}
            
        }
    })
    return arr
};
// map法
var twoSum = function(nums, target) {
    let map = new Map()
    let result = []
    nums.forEach((n,i) => {
        if (!map.has(n)) {
            map.set(target - n, i)
        } else {
            result =  [map.get(n),i]
        }
    })
    return result
};
// console.log(twoSum([2,7,11,15], 9));
// console.log(twoSum([3,2,4], 6));
// console.log(twoSum([3,3], 6));

/**
2.写出一个程序，接受一个十六进制的数，输出该数值的十进制表示。

输入描述:
    输入一个十六进制的数值字符串。注意：一个用例会同时有多组输入数据。
输出描述:
    输出该数值的十进制字符串。不同组的测试用例用\n隔开。

示例1
    输入：
    0xA
    0xAA
    输出：
    10
    170

*/
function eval16(num) {
    const obj = {
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15
    }
    let str
    if (typeof num === 'string') {
        if(/^0x[A-Fa-f0-9]/.test(num)) {
            str = Number(num).toString(16)
        } else {
            return '输入内容错误'
        }
    } else if (typeof num === 'number') {
        str = num.toString(16)
    } else {
        return '输入内容错误'
    }
    let sum = 0
    for (let i = 0; i < str.length; i++) {
        if (isNaN(Number(str[i]))) {
            sum+=obj[str[i]] * 16**(str.length-1-i)
        } else {
            sum+=Number(str[i]) * 16**(str.length-1-i)
        }
    }
    if(isNaN(Number(sum))) {
        return '输入内容错误'
    } else {
        return sum
    }
}
let num1 = 0xA
let num2 = 0xAA
// console.log(eval16('0xAA'));
/**
 * HJ3 明明的随机数
    描述
        明明生成了N个1到500之间的随机整数。请你删去其中重复的数字，即相同的数字只保留一个，把其余相同的数去掉，然后再把这些数从小到大排序，按照排好的顺序输出。
    输入描述：
        第一行先输入随机整数的个数 N 。 接下来的 N 行每行输入一个整数，代表明明生成的随机数。 具体格式可以参考下面的"示例"。
    输出描述：
        输出多行，表示输入数据处理后的结果

    示例1
    输入：
        3
        2
        2
        1
    输出：
        1
        2
    说明：
    输入解释：
    第一个数字是3，也即这个小样例的N=3，说明用计算机生成了3个1到500之间的随机整数，接下来每行一个随机数字，共3行，也即这3个随机数字为：
        2
        2
        1
    所以样例的输出为：
        1
        2  
 */
// 一般人解法
const ar1 = [['3'], ['2'], ['2'], ['1']]
let arr = []
let n = 0
let sum = 0
// ar1.forEach(ai => {
//     if (n === 0) {
//         sum = +ai[0]
//     } else {
//         myRand(+ai[0])
//     }
//     n++
//     if (n > sum) {
//         arr.forEach(a =>console.log(a))
//     }

// })
function myRand(num) {
    arr.push(num)
    arr = Array.from(new Set(arr)).sort((a,b) =>a-b)
    console.log(arr);
}
// 空间换时间解法
// const result = new Array(501)
// ar1.forEach(ai => {
//     if (n === 0) {
//         sum = +ai[0]
//     } else {
//         myRand(+ai[0])
//     }
//     n++
//     if (n > sum) {
//         result.forEach((r,i) =>r === 1&&console.log(i))
//     }

// })
/**跳台阶（递归） */

const map = new Map()
function jump(num) {
    if (map.has(num)) {
        return map.get(num)
    }
    if (num === 1) {
        return 1
    } else if (num === 2) {
        return 2
    }
    const result = jump(num-1) + jump(num -2)
    map.set(num, result)
    return result
}
// console.log('jump',jump(5));

/**
 * HJ17 坐标移动

    开发一个坐标计算工具， A表示向左移动，D表示向右移动，W表示向上移动，S表示向下移动。从（0,0）点开始移动，从输入字符串里面读取一些坐标，并将最终输入结果输出到输出文件里面。

    输入：

    合法坐标为A(或者D或者W或者S) + 数字（两位以内）

    坐标之间以;分隔。

    非法坐标点需要进行丢弃。如AA10;  A1A;  $%$;  YAD; 等。

    下面是一个简单的例子 如：

    A10;S20;W10;D30;X;A1A;B10A11;;A10;

处理过程：

起点（0,0）

+   A10   =  （-10,0）

+   S20   =  (-10,-20)

+   W10  =  (-10,-10)

+   D30  =  (20,-10)

+   x    =  无效

+   A1A   =  无效

+   B10A11   =  无效

+  一个空 不影响

+   A10  =  (10,-10)

结果 （10， -10）
 */
const arr2 = 'A10;S20;W10;D30;X;A1A;B10A11;;A10;'.split(';')
const reg = /^[ADWSadws][0-9]{1,2}$/
const obj = {x:0, y:0}
const map2 = {
    A: (n) => obj.x-=n, D: (n) => obj.x+=n, S: (n) => obj.y-=n, W: (n) => obj.y+=n
}
arr2.forEach(item => {
    if (reg.test(item)) {
        const arr3 = item.split('')
        let fn = arr3[0]
        arr3.shift()
        map2[fn](Number(arr3.join('')))
    }
})
// console.log(`${obj.x},${obj.y}`);

/**
HJ20 密码验证合格程序

描述
密码要求:

    1.长度超过8位

    2.包括大小写字母.数字.其它符号,以上四种至少三种

    3.不能有长度大于2的包含公共元素的子串重复 （注：其他符号不含空格或换行）


输出描述：
    如果符合要求输出：OK，否则输出NG

示例1
输入：
021Abc9000
021Abc9Abc1
021ABC9000
021$bc9000

输出：
OK
NG
NG
OK

正则参考： https://blog.csdn.net/qq_21875331/article/details/113095180
*/


function vaild(passwd) {
    let result = 'NG'
    const reg = 
    /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,}$/
    if (reg.test(passwd)) {
        result = 'OK'
        for(let i =0; i< passwd.length; i++) {
            let copy = passwd
            const item = copy.slice(i, i+3)
            const yu = passwd.slice(i+3)
            if (yu.indexOf(item)!== -1) {
                result = 'NG'
                break
            } else {
                result = 'OK'
            }
        }
    }
    return result
}
// console.log(vaild('021ABC9000'));
/**
 * HJ23 删除字符串中出现次数最少的字符

    描述
        实现删除字符串中出现次数最少的字符，若出现次数最少的字符有多个，则把出现次数最少的字符都删除。输出删除这些单词后的字符串，字符串中其它字符保持原来的顺序。

    输入描述：
        字符串只包含小写英文字母, 不考虑非法输入，输入的字符串长度小于等于20个字节。

    输出描述：
        删除字符串中出现次数最少的字符后的字符串。

    示例1
    输入：
        aabcddd
    输出：
        aaddd
 */
let token = 'assssa'
const map3 = {}
const arr3= token.split('')
arr3.forEach(item => {
    if (map3[item]) {
        map3[item]++
    } else {
        map3[item] = 1
    }
})
const values = Object.values(map3)
const min = Math.min.apply(Math,values)
// console.log(min);
for(key in map3 ) {
    if (map3[key] === min) {
        token=token.replaceAll(key, '')
    }
}
// console.log(token)

/**
 * 
 * HJ33 整数与IP地址间的转换

    描述
    原理：ip地址的每段可以看成是一个0-255的整数，把每段拆分成一个二进制形式组合起来，然后把这个二进制数转变成
    一个长整数。
    举例：一个ip地址为10.0.3.193
    每段数字             相对应的二进制数
    10                   00001010
    0                    00000000
    3                    00000011
    193                  11000001

    组合起来即为：00001010 00000000 00000011 11000001,转换为10进制数就是：167773121，即该IP地址转换后的数字就是它了。

    输入描述：
    输入 
        1 输入IP地址
        2 输入10进制型的IP地址

    输出描述：
    输出
        1 输出转换成10进制的IP地址
        2 输出转换后的IP地址

    示例1
    输入：
        10.0.3.193
        167969729
    复制
    输出：
        167773121
        10.3.3.193
 */
function ipTurn(ip) {
    const num = Number(ip)
    if (isNaN(num)) {
        const arr = ip.split('.')
        let result=''
        arr.forEach(item => {
            const er = parseInt(item).toString(2)
            result +=  8-er.length > 0 ? plus0(8-er.length, er) : er
        })
        return parseInt(result, 2)
    } else {
        let result = parseInt(num).toString(2)
        result =  32-result.length > 0 ? plus0(32-result.length, result) : result
        const arr = [result.slice(0,8),result.slice(8,16),result.slice(16,24),result.slice(24)]
        let ip = ''
        arr.forEach(item => {
            ip+=parseInt(item, 2)+'.'
        })
        return ip.slice(0, -1)
    }
}
function plus0 (num, item) {
    for (let i = 0; i < num; i++) {
        item = '0' + item
    }
    return item
}
// console.log(ipTurn('10.0.3.193'));
// console.log(ipTurn(167773121));

/**
    HJ101 输入整型数组和排序标识
    描述
        输入整型数组和排序标识，对其元素按照升序或降序进行排序

    输入描述：
        第一行输入数组元素个数
        第二行输入待排序的数组，每个数用空格隔开
        第三行输入一个整数0或1。0代表升序排序，1代表降序排序

    输出描述：
        输出排好序的数字

    输入：
        8
        1 2 4 9 3 55 64 25
        0
    输出：
        1 2 3 4 9 25 55 64
    示例2
    输入：
        5
        1 2 3 4 5
        1
    输出：
        5 4 3 2 1
*/
let count = 0
let data = []
let tokens = [1,2,4,9]
switch(count) {
    case 0: 
        count++
    break;
    case 1:
        data = tokens
        count++
    break;
    default:
        console.log(sort(data, +tokens[0]))
        count=0
    break;
}
function sort(data, type) {
    if (type === 0) {
        data.sort((a,b) => a-b)
    } else {
        data.sort((a,b) => b-a)
    }
    return data.join(' ')
}

/**
    题目描述
        将一个字符串str的内容颠倒过来，并输出。str的长度不超过100个字符。

    输入描述:
        输入一个字符串，可以有空格

    输出描述:
        输出逆序的字符串

    示例1
    输入
        I am a student
    输出
        tneduts a ma I
*/
let inputStr = 'I am a student'
let newInputArr = inputStr.split(' ')
newInputArr = newInputArr.map(str => reduceStr(str))
function reduceStr(str) {
    const strArr = str.split('')
    
    return strArr.reverse().join('')
}
// console.log(newInputArr.reverse().join(' '));
/**
    HJ8 合并表记录

    描述
        数据表记录包含表索引index和数值value（int范围的正整数），请对表索引相同的记录进行合并，
        即将相同索引的数值进行求和运算，输出按照index值升序进行输出。

    
    提示:
        0 <= index <= 11111111
        1 <= value <= 100000


    示例1
        输入：
        4
        0 1
        0 2
        1 2
        3 4
        输出：
        0 3
        1 2
        3 4
*/
{
    let count = 0
    let arr = []
    
    function 函数内() {
        if (count === 0) {
            count =  parseInt(tokens[0])
        } else {
            count--
            let i = parseInt(tokens[0])
            let v = parseInt(tokens[1])
            arr[i] ? arr[i]+=v : arr[i]=v
        }
        if (count === 0){
            arr.forEach((item, i) => {
                if (item) {
                    console.log(i, item)
                }
            })
        }
    }

}


/**
HJ26 字符串排序

    描述
        编写一个程序，将输入字符串中的字符按如下规则排序。

        规则 1 ：英文字母从 A 到 Z 排列，不区分大小写。

        如，输入： Type 输出： epTy

        规则 2 ：同一个英文字母的大小写同时存在时，按照输入顺序排列。

        如，输入： BabA 输出： aABb

        规则 3 ：非英文字母的其它字符保持原来的位置。


        如，输入： By?e 输出： Be?y

        示例1
            输入：
            A Famous Saying: Much Ado About Nothing (2012/8).
            输出：
            A aaAAbc dFgghh: iimM nNn oooos Sttuuuy (2012/8).
*/
// console.log(sortStr('A Famous Saying: Much Ado About Nothing (2012/8).'));
function sortStr(str) {
    let reseveStr = str.split('').map((item, i) => ({v: item, i}))
    for (let i = 0; i < reseveStr.length; i++) {
        if (/[a-zA-Z]/.test(reseveStr[i].v)) {
            for (let j = i+1; j < reseveStr.length; j++) {
                if (/[a-zA-Z]/.test(reseveStr[j].v)) {
                    if (reseveStr[i].v.toUpperCase() > reseveStr[j].v.toUpperCase()) {
                        let n = reseveStr[i].v
                        let i2 = reseveStr[i].i
                        reseveStr[i].v = reseveStr[j].v
                        reseveStr[i].i = reseveStr[j].i
                        reseveStr[j].v = n 
                        reseveStr[j].i = i2
                    } else if (reseveStr[i].v.toUpperCase() === reseveStr[j].v.toUpperCase()) {
                        if (reseveStr[i].i > reseveStr[j].i) {
                            let n = reseveStr[i].v
                            let i2 = reseveStr[i].i
                            reseveStr[i].v = reseveStr[j].v
                            reseveStr[i].i = reseveStr[j].i
                            reseveStr[j].v = n 
                            reseveStr[j].i = i2
                        }
                    }
                }
            }
        }
        
    }
    console.log(reseveStr);
    return reseveStr.sort((a,b) => {
        if (a.i > b.i) {
            return 1
        } else {
            return 0
        }
    }).map(item => item.v).join('')

}
/**
    HJ14 字符串排序

    描述
        给定 n 个字符串，请对 n 个字符串按照字典序排列。

    输入描述：
    输入第一行为一个正整数n(1≤n≤1000),下面n行为n个字符串(字符串长度≤100),字符串中只含有大小写字母。

    输入：
        9
        cap
        to
        cat
        card
        two
        too
        up
        boat
        boot
    输出：
        boat
        boot
        cap
        card
        cat
        to
        too
        two
        up
*/
{
    let len = 0
    let count = 0
    let arr = []
    function 函数内() {
        let tokens = line.split(' ');
        if (count === 0) {
            count = parseInt(tokens[0])
        } else {
            count--
            arr.push(tokens[0])
            if (count === 0) {
                arr.sort((a, b) => {
                    if (a > b) {
                        return 1
                    } else {
                        return -1
                    }
                })
                arr.forEach(item => {
                    console.log(item)
                })
            }
        }
    }
}
/**
    HJ27 查找兄弟单词

    描述
        定义一个单词的“兄弟单词”为：交换该单词字母顺序（注：可以交换任意次），而不添加、删除、修改原有的字母就能生成的单词。
        兄弟单词要求和原来的单词不同。例如： ab 和 ba 是兄弟单词。 ab 和 ab 则不是兄弟单词。
        现在给定你 n 个单词，另外再给你一个单词 x ，让你寻找 x 的兄弟单词里，按字典序排列后的第 k 个单词是什么？
        注意：字典中可能有重复单词。

    输入描述：
        输入只有一行。 先输入字典中单词的个数n，再输入n个单词作为字典单词。 然后输入一个单词x 最后后输入一个整数k

    输出描述：
        第一行输出查找到x的兄弟单词的个数m 第二行输出查找到的按照字典顺序排序后的第k个兄弟单词，没有符合第k个的话则不用输出。

    示例1
        输入：
            3 abc bca cab   abc 1
        输出：
            2
            bca
    示例2
    输入：
        6 cab ad abcd cba abc bca      abc 1
    输出：
        3
        bca
    说明：
        abc的兄弟单词有cab cba bca，所以输出3
        经字典序排列后，变为bca cab cba，所以第1个字典序兄弟单词为bca 
*/
{
    let tokens = line.split(" ");
    const self = tokens[tokens.length -2]
    const key = tokens[tokens.length -1]
    const arr = tokens.slice(1,tokens.length -2)
    // const result = borther(['cab', 'ad' ,'abcd', 'cba' ,'abc', 'bca' ], 'abc')
    const result = borther(arr, self)
    // console.log(result.length);
    if (result[key]) {
        // console.log(result[key-1]);
    }
}
function borther(arr, self) {
    const borArr = []
    const selMap = itemCount(self)
    arr.forEach(item => {
        if (item.length ===self.length && item !==self) {
            // 计算item的每个字母个数
            let flag = true
            const itemMap = itemCount(item)
            for (const key in itemMap) {
                if(itemMap[key] !== selMap[key]) {
                    flag = false
                    break
                }
            }
            if (flag) {
                borArr.push(item)
            }

        }
    })
    return borArr.sort((a,b)=> {
        if (a > b) {
            return 1
        } else {
            return -1
        }
    })
}
function itemCount(self) {
    const selfarr = self.split('')

    const map = {}
    selfarr.forEach(s => {
        if(map[s]) {
            map[s]++
        } else {
            map[s] = 1
        }
    })
    return map
}
