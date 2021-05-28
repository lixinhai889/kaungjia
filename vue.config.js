/*
 * @Author: your name
 * @Date: 2021-05-28 13:00:25
 * @LastEditTime: 2021-05-28 14:12:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xiangmu\super\vue.config.js
 */
module.exports = {
    configureWebpack:{
        resolve:{
          alias:{
             'assets':'@/assets',
             'common':'@/common',
             'components':'@/components',
             'network':'@network',
             'views':'@/views',
            }
        }
    }

 }