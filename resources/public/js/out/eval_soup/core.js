// Compiled by ClojureScript 1.9.293 {}
goog.provide('eval_soup.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.js');
goog.require('cljs.reader');
goog.require('clojure.walk');
goog.require('goog.net.XhrIo');
eval_soup.core.fix_goog_path = (function eval_soup$core$fix_goog_path(path){
var parts = clojure.string.split.call(null,path,/\//);
var last_part = cljs.core.last.call(null,parts);
var new_parts = cljs.core.concat.call(null,cljs.core.butlast.call(null,parts),((cljs.core._EQ_.call(null,last_part,clojure.string.lower_case.call(null,last_part)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_part,last_part], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.lower_case.call(null,last_part)], null)));
return clojure.string.join.call(null,"/",new_parts);
});
eval_soup.core.custom_load_BANG_ = (function eval_soup$core$custom_load_BANG_(var_args){
var args18853 = [];
var len__10353__auto___18857 = arguments.length;
var i__10354__auto___18858 = (0);
while(true){
if((i__10354__auto___18858 < len__10353__auto___18857)){
args18853.push((arguments[i__10354__auto___18858]));

var G__18859 = (i__10354__auto___18858 + (1));
i__10354__auto___18858 = G__18859;
continue;
} else {
}
break;
}

var G__18855 = args18853.length;
switch (G__18855) {
case 2:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18853.length)].join('')));

}
});

eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (opts,cb){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/^goog\/.*/,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts)))){
return eval_soup.core.custom_load_BANG_.call(null,cljs.core.update.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),eval_soup.core.fix_goog_path),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".js"], null),cb);
} else {
return eval_soup.core.custom_load_BANG_.call(null,opts,(cljs.core.truth_(new cljs.core.Keyword(null,"macros","macros",811339431).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".clj",".cljc"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".cljs",".cljc",".js"], null)),cb);
}
});

eval_soup.core.custom_load_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (opts,extensions,cb){
var temp__4655__auto__ = cljs.core.first.call(null,extensions);
if(cljs.core.truth_(temp__4655__auto__)){
var extension = temp__4655__auto__;
try{return goog.net.XhrIo.send([cljs.core.str(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(extension)].join(''),((function (extension,temp__4655__auto__){
return (function (e){
if(cljs.core.truth_(e.target.isSuccess())){
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),((cljs.core._EQ_.call(null,extension,".js"))?new cljs.core.Keyword(null,"js","js",1768080579):new cljs.core.Keyword(null,"clj","clj",-660495428)),new cljs.core.Keyword(null,"source","source",-433931539),e.target.getResponseText()], null));
} else {
return eval_soup.core.custom_load_BANG_.call(null,opts,cljs.core.rest.call(null,extensions),cb);
}
});})(extension,temp__4655__auto__))
);
}catch (e18856){if((e18856 instanceof Error)){
var _ = e18856;
return eval_soup.core.custom_load_BANG_.call(null,opts,cljs.core.rest.call(null,extensions),cb);
} else {
throw e18856;

}
}} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
}
});

eval_soup.core.custom_load_BANG_.cljs$lang$maxFixedArity = 3;

eval_soup.core.eval_forms = (function eval_soup$core$eval_forms(forms,cb,state,current_ns,custom_load){
var opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"load","load",-1318641184),custom_load,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true], null);
var channel = cljs.core.async.chan.call(null);
var forms__$1 = cljs.core.atom.call(null,forms);
var results = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var c__16023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16023__auto__,opts,channel,forms__$1,results){
return (function (){
var f__16024__auto__ = (function (){var switch__15911__auto__ = ((function (c__16023__auto__,opts,channel,forms__$1,results){
return (function (state_19014){
var state_val_19015 = (state_19014[(1)]);
if((state_val_19015 === (7))){
var inst_18998 = (state_19014[(2)]);
var inst_18999 = cljs.core.swap_BANG_.call(null,forms__$1,cljs.core.rest);
var state_19014__$1 = (function (){var statearr_19016 = state_19014;
(statearr_19016[(7)] = inst_18999);

(statearr_19016[(8)] = inst_18998);

return statearr_19016;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19014__$1,(19),channel);
} else {
if((state_val_19015 === (1))){
var state_19014__$1 = state_19014;
var statearr_19017_19049 = state_19014__$1;
(statearr_19017_19049[(2)] = null);

(statearr_19017_19049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (4))){
var state_19014__$1 = state_19014;
var statearr_19018_19050 = state_19014__$1;
(statearr_19018_19050[(2)] = null);

(statearr_19018_19050[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (15))){
var inst_18982 = (state_19014[(2)]);
var state_19014__$1 = state_19014;
var statearr_19019_19051 = state_19014__$1;
(statearr_19019_19051[(2)] = inst_18982);

(statearr_19019_19051[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (13))){
var inst_18969 = (state_19014[(9)]);
var inst_18978 = cljs.core.second.call(null,inst_18969);
var inst_18979 = cljs.core.reset_BANG_.call(null,current_ns,inst_18978);
var state_19014__$1 = state_19014;
var statearr_19020_19052 = state_19014__$1;
(statearr_19020_19052[(2)] = inst_18979);

(statearr_19020_19052[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (6))){
var inst_19006 = (state_19014[(2)]);
var state_19014__$1 = state_19014;
var statearr_19021_19053 = state_19014__$1;
(statearr_19021_19053[(2)] = inst_19006);

(statearr_19021_19053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (17))){
var inst_18969 = (state_19014[(9)]);
var inst_18971 = (state_19014[(10)]);
var inst_18993 = (function (){var form = inst_18969;
var opts__$1 = inst_18971;
return ((function (form,opts__$1,inst_18969,inst_18971,state_val_19015,c__16023__auto__,opts,channel,forms__$1,results){
return (function (p1__18861_SHARP_){
return cljs.core.async.put_BANG_.call(null,channel,p1__18861_SHARP_);
});
;})(form,opts__$1,inst_18969,inst_18971,state_val_19015,c__16023__auto__,opts,channel,forms__$1,results))
})();
var inst_18994 = cljs.js.eval.call(null,state,inst_18969,inst_18971,inst_18993);
var state_19014__$1 = state_19014;
var statearr_19022_19054 = state_19014__$1;
(statearr_19022_19054[(2)] = inst_18994);

(statearr_19022_19054[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (3))){
var inst_19008 = (state_19014[(2)]);
var inst_19009 = (function (){return ((function (inst_19008,state_val_19015,c__16023__auto__,opts,channel,forms__$1,results){
return (function (p1__18862_SHARP_){
var or__9245__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(p1__18862_SHARP_);
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
} else {
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__18862_SHARP_);
}
});
;})(inst_19008,state_val_19015,c__16023__auto__,opts,channel,forms__$1,results))
})();
var inst_19010 = cljs.core.deref.call(null,results);
var inst_19011 = cljs.core.mapv.call(null,inst_19009,inst_19010);
var inst_19012 = cb.call(null,inst_19011);
var state_19014__$1 = (function (){var statearr_19023 = state_19014;
(statearr_19023[(11)] = inst_19008);

return statearr_19023;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19014__$1,inst_19012);
} else {
if((state_val_19015 === (12))){
var inst_18969 = (state_19014[(9)]);
var inst_18985 = (state_19014[(2)]);
var inst_18986 = (inst_18969 instanceof Error);
var state_19014__$1 = (function (){var statearr_19024 = state_19014;
(statearr_19024[(12)] = inst_18985);

return statearr_19024;
})();
if(cljs.core.truth_(inst_18986)){
var statearr_19025_19055 = state_19014__$1;
(statearr_19025_19055[(1)] = (16));

} else {
var statearr_19026_19056 = state_19014__$1;
(statearr_19026_19056[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (2))){
var inst_18957 = cljs.core.deref.call(null,forms__$1);
var inst_18958 = cljs.core.seq.call(null,inst_18957);
var state_19014__$1 = state_19014;
if(inst_18958){
var statearr_19027_19057 = state_19014__$1;
(statearr_19027_19057[(1)] = (4));

} else {
var statearr_19028_19058 = state_19014__$1;
(statearr_19028_19058[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (19))){
var inst_19001 = (state_19014[(2)]);
var inst_19002 = cljs.core.swap_BANG_.call(null,results,cljs.core.conj,inst_19001);
var state_19014__$1 = (function (){var statearr_19029 = state_19014;
(statearr_19029[(13)] = inst_19002);

return statearr_19029;
})();
var statearr_19030_19059 = state_19014__$1;
(statearr_19030_19059[(2)] = null);

(statearr_19030_19059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (11))){
var state_19014__$1 = state_19014;
var statearr_19031_19060 = state_19014__$1;
(statearr_19031_19060[(2)] = null);

(statearr_19031_19060[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (9))){
var inst_18969 = (state_19014[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19014,(8),Error,null,(7));
var inst_18968 = cljs.core.deref.call(null,forms__$1);
var inst_18969__$1 = cljs.core.first.call(null,inst_18968);
var inst_18970 = cljs.core.deref.call(null,current_ns);
var inst_18971 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"ns","ns",441598760),inst_18970);
var inst_18972 = cljs.core.list_QMARK_.call(null,inst_18969__$1);
var state_19014__$1 = (function (){var statearr_19032 = state_19014;
(statearr_19032[(9)] = inst_18969__$1);

(statearr_19032[(10)] = inst_18971);

return statearr_19032;
})();
if(inst_18972){
var statearr_19033_19061 = state_19014__$1;
(statearr_19033_19061[(1)] = (10));

} else {
var statearr_19034_19062 = state_19014__$1;
(statearr_19034_19062[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (5))){
var state_19014__$1 = state_19014;
var statearr_19035_19063 = state_19014__$1;
(statearr_19035_19063[(2)] = null);

(statearr_19035_19063[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (14))){
var state_19014__$1 = state_19014;
var statearr_19036_19064 = state_19014__$1;
(statearr_19036_19064[(2)] = null);

(statearr_19036_19064[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (16))){
var inst_18969 = (state_19014[(9)]);
var inst_18988 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_18989 = [inst_18969];
var inst_18990 = cljs.core.PersistentHashMap.fromArrays(inst_18988,inst_18989);
var inst_18991 = cljs.core.async.put_BANG_.call(null,channel,inst_18990);
var state_19014__$1 = state_19014;
var statearr_19037_19065 = state_19014__$1;
(statearr_19037_19065[(2)] = inst_18991);

(statearr_19037_19065[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (10))){
var inst_18969 = (state_19014[(9)]);
var inst_18974 = new cljs.core.Symbol(null,"ns","ns",2082130287,null);
var inst_18975 = cljs.core.first.call(null,inst_18969);
var inst_18976 = cljs.core._EQ_.call(null,inst_18974,inst_18975);
var state_19014__$1 = state_19014;
if(inst_18976){
var statearr_19038_19066 = state_19014__$1;
(statearr_19038_19066[(1)] = (13));

} else {
var statearr_19039_19067 = state_19014__$1;
(statearr_19039_19067[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (18))){
var inst_18996 = (state_19014[(2)]);
var state_19014__$1 = state_19014;
var statearr_19040_19068 = state_19014__$1;
(statearr_19040_19068[(2)] = inst_18996);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19014__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19015 === (8))){
var inst_18960 = (state_19014[(2)]);
var inst_18961 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_18962 = [inst_18960];
var inst_18963 = cljs.core.PersistentHashMap.fromArrays(inst_18961,inst_18962);
var inst_18964 = cljs.core.async.put_BANG_.call(null,channel,inst_18963);
var state_19014__$1 = state_19014;
var statearr_19041_19069 = state_19014__$1;
(statearr_19041_19069[(2)] = inst_18964);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19014__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16023__auto__,opts,channel,forms__$1,results))
;
return ((function (switch__15911__auto__,c__16023__auto__,opts,channel,forms__$1,results){
return (function() {
var eval_soup$core$eval_forms_$_state_machine__15912__auto__ = null;
var eval_soup$core$eval_forms_$_state_machine__15912__auto____0 = (function (){
var statearr_19045 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19045[(0)] = eval_soup$core$eval_forms_$_state_machine__15912__auto__);

(statearr_19045[(1)] = (1));

return statearr_19045;
});
var eval_soup$core$eval_forms_$_state_machine__15912__auto____1 = (function (state_19014){
while(true){
var ret_value__15913__auto__ = (function (){try{while(true){
var result__15914__auto__ = switch__15911__auto__.call(null,state_19014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15914__auto__;
}
break;
}
}catch (e19046){if((e19046 instanceof Object)){
var ex__15915__auto__ = e19046;
var statearr_19047_19070 = state_19014;
(statearr_19047_19070[(5)] = ex__15915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19071 = state_19014;
state_19014 = G__19071;
continue;
} else {
return ret_value__15913__auto__;
}
break;
}
});
eval_soup$core$eval_forms_$_state_machine__15912__auto__ = function(state_19014){
switch(arguments.length){
case 0:
return eval_soup$core$eval_forms_$_state_machine__15912__auto____0.call(this);
case 1:
return eval_soup$core$eval_forms_$_state_machine__15912__auto____1.call(this,state_19014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
eval_soup$core$eval_forms_$_state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$0 = eval_soup$core$eval_forms_$_state_machine__15912__auto____0;
eval_soup$core$eval_forms_$_state_machine__15912__auto__.cljs$core$IFn$_invoke$arity$1 = eval_soup$core$eval_forms_$_state_machine__15912__auto____1;
return eval_soup$core$eval_forms_$_state_machine__15912__auto__;
})()
;})(switch__15911__auto__,c__16023__auto__,opts,channel,forms__$1,results))
})();
var state__16025__auto__ = (function (){var statearr_19048 = f__16024__auto__.call(null);
(statearr_19048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16023__auto__);

return statearr_19048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16025__auto__);
});})(c__16023__auto__,opts,channel,forms__$1,results))
);

return c__16023__auto__;
});
eval_soup.core.str__GT_form = (function eval_soup$core$str__GT_form(s){
try{return cljs.reader.read_string.call(null,s);
}catch (e19073){if((e19073 instanceof Error)){
var _ = e19073;
return null;
} else {
throw e19073;

}
}});
eval_soup.core.wrap_macroexpand = (function eval_soup$core$wrap_macroexpand(form){
if(cljs.core.coll_QMARK_.call(null,form)){
return cljs.core._conj.call(null,(function (){var x__10082__auto__ = cljs.core._conj.call(null,(function (){var x__10082__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null));
} else {
return form;
}
});
eval_soup.core.add_timeout_reset = (function eval_soup$core$add_timeout_reset(form){
return cljs.core._conj.call(null,(function (){var x__10082__auto__ = cljs.core.list(new cljs.core.Symbol("cljs.user","ps-reset-timeout!","cljs.user/ps-reset-timeout!",-1629160217,null));
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});
eval_soup.core.add_timeout_checks = (function eval_soup$core$add_timeout_checks(form){
if((cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,form)))){
return form;
} else {
var form__$1 = clojure.walk.walk.call(null,eval_soup.core.add_timeout_checks,cljs.core.identity,form);
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.first.call(null,form__$1)))){
return cljs.core._conj.call(null,(function (){var x__10082__auto__ = cljs.core.list(new cljs.core.Symbol("cljs.user","ps-check-for-timeout!","cljs.user/ps-check-for-timeout!",-708791466,null));
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = form__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
} else {
return form__$1;
}
}
});
eval_soup.core.add_timeouts_if_necessary = (function eval_soup$core$add_timeouts_if_necessary(forms,expanded_forms){
var iter__10028__auto__ = (function eval_soup$core$add_timeouts_if_necessary_$_iter__19078(s__19079){
return (new cljs.core.LazySeq(null,(function (){
var s__19079__$1 = s__19079;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19079__$1);
if(temp__4657__auto__){
var s__19079__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19079__$2)){
var c__10026__auto__ = cljs.core.chunk_first.call(null,s__19079__$2);
var size__10027__auto__ = cljs.core.count.call(null,c__10026__auto__);
var b__19081 = cljs.core.chunk_buffer.call(null,size__10027__auto__);
if((function (){var i__19080 = (0);
while(true){
if((i__19080 < size__10027__auto__)){
var i = cljs.core._nth.call(null,c__10026__auto__,i__19080);
var expanded_form = cljs.core.get.call(null,expanded_forms,i);
cljs.core.chunk_append.call(null,b__19081,(((cljs.core.coll_QMARK_.call(null,expanded_form)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,expanded_form)),new cljs.core.Symbol(null,"recur","recur",1202958259,null))))?eval_soup.core.add_timeout_reset.call(null,eval_soup.core.add_timeout_checks.call(null,expanded_form)):cljs.core.get.call(null,forms,i)));

var G__19082 = (i__19080 + (1));
i__19080 = G__19082;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19081),eval_soup$core$add_timeouts_if_necessary_$_iter__19078.call(null,cljs.core.chunk_rest.call(null,s__19079__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19081),null);
}
} else {
var i = cljs.core.first.call(null,s__19079__$2);
var expanded_form = cljs.core.get.call(null,expanded_forms,i);
return cljs.core.cons.call(null,(((cljs.core.coll_QMARK_.call(null,expanded_form)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.flatten.call(null,expanded_form)),new cljs.core.Symbol(null,"recur","recur",1202958259,null))))?eval_soup.core.add_timeout_reset.call(null,eval_soup.core.add_timeout_checks.call(null,expanded_form)):cljs.core.get.call(null,forms,i)),eval_soup$core$add_timeouts_if_necessary_$_iter__19078.call(null,cljs.core.rest.call(null,s__19079__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__10028__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,forms)));
});
if(typeof eval_soup.core.state !== 'undefined'){
} else {
eval_soup.core.state = cljs.js.empty_state.call(null);
}
eval_soup.core.code__GT_results = (function eval_soup$core$code__GT_results(var_args){
var args19083 = [];
var len__10353__auto___19089 = arguments.length;
var i__10354__auto___19090 = (0);
while(true){
if((i__10354__auto___19090 < len__10353__auto___19089)){
args19083.push((arguments[i__10354__auto___19090]));

var G__19091 = (i__10354__auto___19090 + (1));
i__10354__auto___19090 = G__19091;
continue;
} else {
}
break;
}

var G__19085 = args19083.length;
switch (G__19085) {
case 2:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19083.length)].join('')));

}
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$2 = (function (forms,cb){
return eval_soup.core.code__GT_results.call(null,forms,cb,cljs.core.PersistentArrayMap.EMPTY);
});

eval_soup.core.code__GT_results.cljs$core$IFn$_invoke$arity$3 = (function (forms,cb,p__19086){
var map__19087 = p__19086;
var map__19087__$1 = ((((!((map__19087 == null)))?((((map__19087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19087.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19087):map__19087);
var custom_load = cljs.core.get.call(null,map__19087__$1,new cljs.core.Keyword(null,"custom-load","custom-load",-1830353108));
var current_ns = cljs.core.get.call(null,map__19087__$1,new cljs.core.Keyword(null,"current-ns","current-ns",1661653428),cljs.core.atom.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)));
var forms__$1 = cljs.core.mapv.call(null,eval_soup.core.str__GT_form,forms);
var eval_cb = ((function (forms__$1,map__19087,map__19087__$1,custom_load,current_ns){
return (function (results){
return cb.call(null,results);
});})(forms__$1,map__19087,map__19087__$1,custom_load,current_ns))
;
var read_cb = ((function (forms__$1,eval_cb,map__19087,map__19087__$1,custom_load,current_ns){
return (function (results){
return eval_soup.core.eval_forms.call(null,eval_soup.core.add_timeouts_if_necessary.call(null,forms__$1,results),eval_cb,eval_soup.core.state,current_ns,custom_load);
});})(forms__$1,eval_cb,map__19087,map__19087__$1,custom_load,current_ns))
;
var init_cb = ((function (forms__$1,eval_cb,read_cb,map__19087,map__19087__$1,custom_load,current_ns){
return (function (results){
return eval_soup.core.eval_forms.call(null,cljs.core.map.call(null,eval_soup.core.wrap_macroexpand,forms__$1),read_cb,eval_soup.core.state,current_ns,custom_load);
});})(forms__$1,eval_cb,read_cb,map__19087,map__19087__$1,custom_load,current_ns))
;
return eval_soup.core.eval_forms.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)),cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null),cljs.core.list(new cljs.core.Symbol(null,"atom","atom",1243487874,null),(0))),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"ps-reset-timeout!","ps-reset-timeout!",-155220708,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null))))),cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"ps-check-for-timeout!","ps-check-for-timeout!",-317076467,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),cljs.core.list(new cljs.core.Symbol("js","Date.","js/Date.",384205255,null))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"ps-last-time","ps-last-time",101355075,null))),(2000)),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),"Execution timed out.")))),cljs.core.list(new cljs.core.Symbol(null,"set!","set!",250714521,null),new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null))),cljs.core._conj.call(null,(function (){var x__10082__auto__ = cljs.core.deref.call(null,current_ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),new cljs.core.Symbol(null,"ns","ns",2082130287,null))], null),init_cb,eval_soup.core.state,current_ns,custom_load);
});

eval_soup.core.code__GT_results.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map