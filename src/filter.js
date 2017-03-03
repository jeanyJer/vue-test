/**
 * @file 全局filter
 * @author xujin
 */
'use strict';

export default {
	filters: {
		/**
         * 将title字符串首字母转成大写
         * @param  {String} str 要转换的字符串
         * @return {String}     转换后的字符串
         */
        upperFirstChart(str) {
        	var reg = /\b(\w)|\s(\w)/g;
            return str.replace(reg,function(m){return m.toUpperCase()});
        }
    }
}