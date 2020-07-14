!function(u){var e={};function t(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return u[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=u,t.c=e,t.d=function(u,e,r){t.o(u,e)||Object.defineProperty(u,e,{enumerable:!0,get:r})},t.r=function(u){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(u,"__esModule",{value:!0})},t.t=function(u,e){if(1&e&&(u=t(u)),8&e)return u;if(4&e&&"object"==typeof u&&u&&u.__esModule)return u;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:u}),2&e&&"string"!=typeof u)for(var n in u)t.d(r,n,function(e){return u[e]}.bind(null,n));return r},t.n=function(u){var e=u&&u.__esModule?function(){return u.default}:function(){return u};return t.d(e,"a",e),e},t.o=function(u,e){return Object.prototype.hasOwnProperty.call(u,e)},t.p="",t(t.s=7)}([function(u,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.recursive=e.failure=e.success=e.Parser=void 0;var r=t(1),n=function(){function u(u){this.func=u}return u.prototype.apply=function(u){return"ErrorState"===u.__type__?u:this.func(u)},u.prototype.run=function(u){var e=r.InitialState(u);return this.apply(e)},u.prototype.map=function(e){var t=this;return u.from((function(u){var n=t.func(u);return"ErrorState"===n.__type__?n:r.ResultState.update(n,e(n.result),0)}))},u.prototype.bind=function(e){var t=this;return u.from((function(u){var r=t.func(u);return"ErrorState"===r.__type__?r:e(r.result).func(r)}))},u.from=function(e){return new u(e)},u.of=function(e){return u.from((function(u){return r.ResultState.update(u,e,0)}))},u.zero=function(e){return u.from((function(u){return r.ErrorState(u,e)}))},u.recursive=function(e){return u.from((function(u){return e().func(u)}))},u}();e.Parser=n,e.success=n.of,e.failure=n.zero,e.recursive=n.recursive},function(u,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorState=e.ResultState=e.InitialState=void 0,e.InitialState=function(u){return{__type__:"InitialState",index:0,text:u}},e.ResultState=function(u,e,t){return{__type__:"ResultState",result:u,index:t,text:e}},e.ResultState.update=function(u,t,r){return e.ResultState(t,u.text.slice(r),u.index+r)},e.ErrorState=function(u,e){return{__type__:"ErrorState",msg:e,index:u.index}}},function(u,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.str=void 0;var r=t(0),n=t(1);e.str=function(u){return r.Parser.from((function(e){var t=e.text,r=u.length;return t.length<r?n.ErrorState(e,"Parser str: unexpected end of input"):t.startsWith(u)?n.ResultState.update(e,u,r):n.ErrorState(e,'Parser str: was looking for "'+u+'", found "'+t.slice(0,r)+'"')}))}},function(u,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.digitNonzero=e.digit=e.letterLatinExtLower=e.letterLatinExtUpper=e.letterLatinExt=e.letterLatinLower=e.letterLatinUpper=e.letterLatin=e.letterLower=e.letterUpper=e.letter=e.anyChar=void 0;var r=t(0),n=t(0),a=t(1),o=function(u,e){return n.Parser.from((function(t){if(0===t.text.length)return a.ErrorState(t,"Parser "+u+": unexpected end of input");var r=t.text.match(e);return null!=r?a.ResultState.update(t,r[0],r[0].length):a.ErrorState(t,"Parser "+u+": was trying to parse "+u+' but found "'+t.text.charAt(0)+'" instead')}))};e.anyChar=o("anyChar",/^./);e.letter=o("letter",/^[A-Za-z\xB5\xC0-\xD6\xD8-\xF6\xF8-\u01BA\u01BC-\u01BF\u01C4-\u0293\u0295-\u02AF\u0370-\u0373\u0376\u0377\u037B-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0560-\u0588\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FD-\u10FF\u13A0-\u13F5\u13F8-\u13FD\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2134\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2C7B\u2C7E-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA640-\uA66D\uA680-\uA69B\uA722-\uA76F\uA771-\uA787\uA78B-\uA78E\uA790-\uA7BF\uA7C2-\uA7C6\uA7FA\uAB30-\uAB5A\uAB60-\uAB67\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF21-\uFF3A\uFF41-\uFF5A]/);e.letterUpper=o("letterUpper",/^[A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1C90-\u1CBA\u1CBD-\u1CBF\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uA7B8\uA7BA\uA7BC\uA7BE\uA7C2\uA7C4-\uA7C6\uFF21-\uFF3A]/);e.letterLower=o("letterLower",/^[a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C3\uA7FA\uAB30-\uAB5A\uAB60-\uAB67\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A]/);e.letterLatin=o("letterLatin",/^[a-zA-Z]/);e.letterLatinUpper=o("letterLatinUpper",/^[A-Z]/);e.letterLatinLower=o("letterLatinLower",/^[a-z]/);e.letterLatinExt=o("letterLatinExt",/^[a-zA-Z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u024F\u1E00-\u1EFF]/),e.letterLatinExtUpper=e.letterLatinExt.bind((function(u){return u.toUpperCase()===u?r.success(u):r.failure("Parser letterLatinExtUpper: Was trying to parse an uppercase latin extended letter, but found "+u)})),e.letterLatinExtLower=e.letterLatinExt.bind((function(u){return u.toLowerCase()===u?r.success(u):r.failure("Parser letterLatinExtLower: Was trying to parse a lowercase latin extended letter, but found "+u)}));e.digit=o("digit",/^[0-9]/);e.digitNonzero=o("digitNonzero",/^[1-9]/)},function(u,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.exactly=e.many=e.atMost=e.atLeast=e.between=e.optional=void 0;var r=t(1),n=t(0);e.optional=function(u){return n.Parser.from((function(e){var t=u.apply(e);return"ErrorState"===t.__type__?"InitialState"===e.__type__?r.ResultState.update(e,void 0,0):e:t}))},e.between=function(u,e){return function(t){return n.Parser.from((function(n){for(var a,o=[],i=n,c=0;a=i,!("ErrorState"===(i=t.apply(a)).__type__||c>=e);)o.push(i.result),c++;return u<=c?r.ResultState.update(a,o,0):r.ErrorState(n,"Combinator between: Should have found from "+u+" to "+e+" matches, but found "+c)}))}},e.atLeast=function(u){return e.between(u,1/0)},e.atMost=function(u){return e.between(0,u)},e.many=e.atLeast(0),e.exactly=function(u){return e.between(u,u)}},function(u,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.surroundedByExtract=e.surroundedBy=e.sequenceOf=void 0;var r=t(1),n=t(0);e.sequenceOf=function(){for(var u=[],e=0;e<arguments.length;e++)u[e]=arguments[e];return n.Parser.from((function(e){for(var t=[],n=e,a=0,o=u;a<o.length;a++){if("ResultState"!==(n=o[a].apply(n)).__type__)break;t.push(n.result)}return"ResultState"===n.__type__||"InitialState"===n.__type__?r.ResultState.update(n,t,0):n}))},e.surroundedBy=function(u,t){return function(r){return e.sequenceOf(u,r,t).map((function(u){return{left:u[0],middle:u[1],right:u[2]}}))}},e.surroundedByExtract=function(u,t){return function(r){return e.surroundedBy(u,t)(r).map((function(u){return u.middle}))}}},function(u,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.onlyOneOf=e.oneOf=void 0;var r=t(0),n=t(1);e.oneOf=function(){for(var u=[],e=0;e<arguments.length;e++)u[e]=arguments[e];return r.Parser.from((function(e){for(var t=[],r=0,a=u;r<a.length;r++){var o=a[r].apply(e);if("ResultState"===o.__type__)return o;t.push(o.msg)}var i=t.join(",\n  ");return n.ErrorState(e,"Combinator oneOf: none of the below parsers succeeded:\n  "+i)}))},e.onlyOneOf=function(){for(var u=[],e=0;e<arguments.length;e++)u[e]=arguments[e];return r.Parser.from((function(e){var t=u.map((function(u){return u.apply(e)})),r=t.filter((function(u){return"ResultState"===u.__type__})),a=t.filter((function(u){return"ResultState"===u.__type__}));switch(r.length){case 0:var o=a.map((function(u){return u.msg})).join(",\n  ");return n.ErrorState(e,"Combinator onlyOneOf: none of the below parsers succeeded\n  "+o);case 1:return r[0];default:return n.ErrorState(e,"Combinator onlyOneOf: there were too many matches")}}))}},function(u,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=t(8);t(15),document.write(JSON.stringify(r.parser.run("hello world")))},function(u,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.parser=void 0;const r=t(9);e.parser=r.str("hell")},function(u,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(0);Object.defineProperty(e,"Parser",{enumerable:!0,get:function(){return r.Parser}}),Object.defineProperty(e,"success",{enumerable:!0,get:function(){return r.success}}),Object.defineProperty(e,"failure",{enumerable:!0,get:function(){return r.failure}}),Object.defineProperty(e,"recursive",{enumerable:!0,get:function(){return r.recursive}});var n=t(2);Object.defineProperty(e,"str",{enumerable:!0,get:function(){return n.str}});var a=t(3);Object.defineProperty(e,"anyChar",{enumerable:!0,get:function(){return a.anyChar}}),Object.defineProperty(e,"letter",{enumerable:!0,get:function(){return a.letter}}),Object.defineProperty(e,"letterLower",{enumerable:!0,get:function(){return a.letterLower}}),Object.defineProperty(e,"letterUpper",{enumerable:!0,get:function(){return a.letterUpper}}),Object.defineProperty(e,"letterLatin",{enumerable:!0,get:function(){return a.letterLatin}}),Object.defineProperty(e,"letterLatinLower",{enumerable:!0,get:function(){return a.letterLatinLower}}),Object.defineProperty(e,"letterLatinUpper",{enumerable:!0,get:function(){return a.letterLatinUpper}}),Object.defineProperty(e,"letterLatinExt",{enumerable:!0,get:function(){return a.letterLatinExt}}),Object.defineProperty(e,"letterLatinExtLower",{enumerable:!0,get:function(){return a.letterLatinExtLower}}),Object.defineProperty(e,"letterLatinExtUpper",{enumerable:!0,get:function(){return a.letterLatinExtUpper}}),Object.defineProperty(e,"digit",{enumerable:!0,get:function(){return a.digit}}),Object.defineProperty(e,"digitNonzero",{enumerable:!0,get:function(){return a.digitNonzero}});var o=t(10);Object.defineProperty(e,"endOfInput",{enumerable:!0,get:function(){return o.endOfInput}});var i=t(11);Object.defineProperty(e,"$do",{enumerable:!0,get:function(){return i.$do}});var c=t(4);Object.defineProperty(e,"between",{enumerable:!0,get:function(){return c.between}}),Object.defineProperty(e,"atLeast",{enumerable:!0,get:function(){return c.atLeast}}),Object.defineProperty(e,"atMost",{enumerable:!0,get:function(){return c.atMost}}),Object.defineProperty(e,"many",{enumerable:!0,get:function(){return c.many}}),Object.defineProperty(e,"exactly",{enumerable:!0,get:function(){return c.exactly}});var E=t(12);Object.defineProperty(e,"separatedBy",{enumerable:!0,get:function(){return E.separatedBy}}),Object.defineProperty(e,"separatedByBetween",{enumerable:!0,get:function(){return E.separatedByBetween}}),Object.defineProperty(e,"separatedByAtLeast",{enumerable:!0,get:function(){return E.separatedByAtLeast}}),Object.defineProperty(e,"separatedByAtMost",{enumerable:!0,get:function(){return E.separatedByAtMost}}),Object.defineProperty(e,"separatedByExactly",{enumerable:!0,get:function(){return E.separatedByExactly}});var l=t(5);Object.defineProperty(e,"sequenceOf",{enumerable:!0,get:function(){return l.sequenceOf}}),Object.defineProperty(e,"surroundedBy",{enumerable:!0,get:function(){return l.surroundedBy}}),Object.defineProperty(e,"surroundedByExtract",{enumerable:!0,get:function(){return l.surroundedByExtract}});var A=t(6);Object.defineProperty(e,"oneOf",{enumerable:!0,get:function(){return A.oneOf}}),Object.defineProperty(e,"onlyOneOf",{enumerable:!0,get:function(){return A.onlyOneOf}});var s=t(13);Object.defineProperty(e,"peek",{enumerable:!0,get:function(){return s.peek}}),Object.defineProperty(e,"peekSafe",{enumerable:!0,get:function(){return s.peekSafe}}),Object.defineProperty(e,"peekState",{enumerable:!0,get:function(){return s.peekState}});var f=t(14);Object.defineProperty(e,"space",{enumerable:!0,get:function(){return f.space}}),Object.defineProperty(e,"tab",{enumerable:!0,get:function(){return f.tab}}),Object.defineProperty(e,"whitespace",{enumerable:!0,get:function(){return f.whitespace}}),Object.defineProperty(e,"whitespaceMultiline",{enumerable:!0,get:function(){return f.whitespaceMultiline}}),Object.defineProperty(e,"optionalWhitespace",{enumerable:!0,get:function(){return f.optionalWhitespace}}),Object.defineProperty(e,"optionalWhitespaceMultiline",{enumerable:!0,get:function(){return f.optionalWhitespaceMultiline}}),Object.defineProperty(e,"letters",{enumerable:!0,get:function(){return f.letters}}),Object.defineProperty(e,"lettersLower",{enumerable:!0,get:function(){return f.lettersLower}}),Object.defineProperty(e,"lettersUpper",{enumerable:!0,get:function(){return f.lettersUpper}}),Object.defineProperty(e,"lettersLatin",{enumerable:!0,get:function(){return f.lettersLatin}}),Object.defineProperty(e,"lettersLatinLower",{enumerable:!0,get:function(){return f.lettersLatinLower}}),Object.defineProperty(e,"lettersLatinUpper",{enumerable:!0,get:function(){return f.lettersLatinUpper}}),Object.defineProperty(e,"lettersLatinExt",{enumerable:!0,get:function(){return f.lettersLatinExt}}),Object.defineProperty(e,"lettersLatinExtLower",{enumerable:!0,get:function(){return f.lettersLatinExtLower}}),Object.defineProperty(e,"lettersLatinExtUpper",{enumerable:!0,get:function(){return f.lettersLatinExtUpper}}),Object.defineProperty(e,"digits",{enumerable:!0,get:function(){return f.digits}}),Object.defineProperty(e,"digitsNonzero",{enumerable:!0,get:function(){return f.digitsNonzero}}),Object.defineProperty(e,"decimalUint",{enumerable:!0,get:function(){return f.decimalUint}}),Object.defineProperty(e,"decimalInt",{enumerable:!0,get:function(){return f.decimalInt}}),Object.defineProperty(e,"decimalUfloat",{enumerable:!0,get:function(){return f.decimalUfloat}}),Object.defineProperty(e,"decimalFloat",{enumerable:!0,get:function(){return f.decimalFloat}})},function(u,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.endOfInput=void 0;var r=t(0),n=t(1);e.endOfInput=r.Parser.from((function(u){return u.text.length>0?n.ErrorState(u,'Parser endOfInput: expected end of input but found "'+u.text.charAt(0)+'"'):n.ResultState.update(u,void 0,0)}))},function(u,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.$do=void 0;var r=t(0);e.$do=function(u){return r.success(void 0).bind((function(e){var t=u(),n=function(u){var e=t.next(u);return!0===e.done?r.success(e.value):e.value.bind(n)};return n()}))}},function(u,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.separatedByExactly=e.separatedByAtMost=e.separatedByAtLeast=e.separatedBy=e.separatedByBetween=void 0;var r=t(0),n=t(1);e.separatedByBetween=function(u,e){return function(t,a){return void 0===a&&(a="never"),function(o){return r.Parser.from((function(r){for(var i,c=[],E=r,l=r;;){if(i=E,"ErrorState"===(E=o.apply(l)).__type__||c.length>=e){"never"!==a&&(i=l);break}if(i=l,"ErrorState"===(l=t.apply(E)).__type__){"always"!==a&&(i=E,c.push(E.result));break}c.push(E.result)}return c.length>=u?n.ResultState.update(i,c,0):n.ErrorState(r,"Combinator separatedByBetween: Should have found from "+u+" to "+e+" matches, but found "+c.length)}))}}},e.separatedBy=e.separatedByBetween(0,1/0),e.separatedByAtLeast=function(u){return e.separatedByBetween(u,1/0)},e.separatedByAtMost=function(u){return e.separatedByBetween(0,u)},e.separatedByExactly=function(u){return e.separatedByBetween(u,u)}},function(u,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.peekState=e.peekSafe=e.peek=void 0;var r=t(1),n=t(0);e.peek=function(u){return n.Parser.from((function(e){var t=u.apply(e);return"ErrorState"===t.__type__?t:r.ResultState.update(e,t.result,0)}))},e.peekSafe=function(u){return n.Parser.from((function(e){var t=u.apply(e);return"ErrorState"===t.__type__?r.ResultState.update(e,void 0,0):r.ResultState.update(e,t.result,0)}))},e.peekState=function(u){return n.Parser.from((function(e){return r.ResultState.update(e,u.apply(e),0)}))}},function(u,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.decimalFloat=e.decimalUfloat=e.decimalInt=e.decimalUint=e.digitsNonzero=e.digits=e.lettersLatinExtUpper=e.lettersLatinExtLower=e.lettersLatinExt=e.lettersLatinUpper=e.lettersLatinLower=e.lettersLatin=e.lettersUpper=e.lettersLower=e.letters=e.optionalWhitespaceMultiline=e.optionalWhitespace=e.whitespaceMultiline=e.whitespace=e.newline=e.tab=e.space=void 0;var r=t(2),n=t(4),a=t(6),o=t(3),i=t(5);e.space=r.str(" "),e.tab=r.str("\t"),e.newline=r.str("\n"),e.whitespace=n.atLeast(1)(a.oneOf(e.space,e.tab)),e.whitespaceMultiline=n.atLeast(1)(a.oneOf(e.space,e.tab,e.newline)),e.optionalWhitespace=n.many(a.oneOf(e.space,e.tab)),e.optionalWhitespaceMultiline=n.many(a.oneOf(e.space,e.tab,e.newline));var c=function(u){return u.join("")};e.letters=n.many(o.letter).map(c),e.lettersLower=n.many(o.letterLower).map(c),e.lettersUpper=n.many(o.letterUpper).map(c),e.lettersLatin=n.many(o.letterLatin).map(c),e.lettersLatinLower=n.many(o.letterLatinLower).map(c),e.lettersLatinUpper=n.many(o.letterLatinUpper).map(c),e.lettersLatinExt=n.many(o.letterLatinExt).map(c),e.lettersLatinExtLower=n.many(o.letterLatinExtLower).map(c),e.lettersLatinExtUpper=n.many(o.letterLatinExtUpper).map(c),e.digits=n.many(o.digit).map(c),e.digitsNonzero=n.many(o.digitNonzero).map(c),e.decimalUint=a.oneOf(r.str("0"),i.sequenceOf(o.digitNonzero,e.digits).map(c)).map(parseInt),e.decimalInt=a.oneOf(e.decimalUint,i.sequenceOf(r.str("+"),e.decimalUint).map((function(u){u[0];return u[1]})),i.sequenceOf(r.str("-"),e.decimalUint).map((function(u){u[0];return-u[1]}))),e.decimalUfloat=a.oneOf(i.sequenceOf(r.str("0"),r.str("."),e.digits).map(c),i.sequenceOf(o.digitNonzero,e.digits,r.str("."),e.digits).map(c),r.str("0"),i.sequenceOf(o.digitNonzero,e.digits).map(c)).map(parseFloat),e.decimalFloat=a.oneOf(e.decimalUfloat,i.sequenceOf(r.str("+"),e.decimalUfloat).map((function(u){u[0];return u[1]})),i.sequenceOf(r.str("-"),e.decimalUfloat).map((function(u){u[0];return-u[1]})))},function(u,e,t){var r=t(16),n=t(17);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[u.i,n,""]]);var a={insert:"head",singleton:!1};r(n,a);u.exports=n.locals||{}},function(u,e,t){"use strict";var r,n=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var u={};return function(e){if(void 0===u[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(u){t=null}u[e]=t}return u[e]}}(),o=[];function i(u){for(var e=-1,t=0;t<o.length;t++)if(o[t].identifier===u){e=t;break}return e}function c(u,e){for(var t={},r=[],n=0;n<u.length;n++){var a=u[n],c=e.base?a[0]+e.base:a[0],E=t[c]||0,l="".concat(c," ").concat(E);t[c]=E+1;var A=i(l),s={css:a[1],media:a[2],sourceMap:a[3]};-1!==A?(o[A].references++,o[A].updater(s)):o.push({identifier:l,updater:d(s,e),references:1}),r.push(l)}return r}function E(u){var e=document.createElement("style"),r=u.attributes||{};if(void 0===r.nonce){var n=t.nc;n&&(r.nonce=n)}if(Object.keys(r).forEach((function(u){e.setAttribute(u,r[u])})),"function"==typeof u.insert)u.insert(e);else{var o=a(u.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var l,A=(l=[],function(u,e){return l[u]=e,l.filter(Boolean).join("\n")});function s(u,e,t,r){var n=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(u.styleSheet)u.styleSheet.cssText=A(e,n);else{var a=document.createTextNode(n),o=u.childNodes;o[e]&&u.removeChild(o[e]),o.length?u.insertBefore(a,o[e]):u.appendChild(a)}}function f(u,e,t){var r=t.css,n=t.media,a=t.sourceMap;if(n?u.setAttribute("media",n):u.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),u.styleSheet)u.styleSheet.cssText=r;else{for(;u.firstChild;)u.removeChild(u.firstChild);u.appendChild(document.createTextNode(r))}}var p=null,C=0;function d(u,e){var t,r,n;if(e.singleton){var a=C++;t=p||(p=E(e)),r=s.bind(null,t,a,!1),n=s.bind(null,t,a,!0)}else t=E(e),r=f.bind(null,t,e),n=function(){!function(u){if(null===u.parentNode)return!1;u.parentNode.removeChild(u)}(t)};return r(u),function(e){if(e){if(e.css===u.css&&e.media===u.media&&e.sourceMap===u.sourceMap)return;r(u=e)}else n()}}u.exports=function(u,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=n());var t=c(u=u||[],e);return function(u){if(u=u||[],"[object Array]"===Object.prototype.toString.call(u)){for(var r=0;r<t.length;r++){var n=i(t[r]);o[n].references--}for(var a=c(u,e),E=0;E<t.length;E++){var l=i(t[E]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}t=a}}}},function(u,e,t){(e=t(18)(!1)).push([u.i,"html{--bg-col: hsl(0, 0%, 10%);--txt-col: white}body{background-color:var(--bg-col);color:var(--txt-col)}",""]),u.exports=e},function(u,e,t){"use strict";u.exports=function(u){var e=[];return e.toString=function(){return this.map((function(e){var t=function(u,e){var t=u[1]||"",r=u[3];if(!r)return t;if(e&&"function"==typeof btoa){var n=(o=r,i=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(c," */")),a=r.sources.map((function(u){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(u," */")}));return[t].concat(a).concat([n]).join("\n")}var o,i,c;return[t].join("\n")}(e,u);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(u,t,r){"string"==typeof u&&(u=[[null,u,""]]);var n={};if(r)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(n[o]=!0)}for(var i=0;i<u.length;i++){var c=[].concat(u[i]);r&&n[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}}]);