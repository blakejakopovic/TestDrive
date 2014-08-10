// Compiled by ClojureScript 0.0-2307
goog.provide('testdrive.core');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('cljs_time.format');
goog.require('cljs_time.core');
goog.require('clojure.string');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
/**
* The initial application state
*/
testdrive.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"app-container-id","app-container-id",-899827362),"testdrive-app",new cljs.core.Keyword(null,"port","port",1534937262),(4567),new cljs.core.Keyword(null,"connected?","connected?",-1197551387),false,new cljs.core.Keyword(null,"console-hidden?","console-hidden?",-230453177),true,new cljs.core.Keyword(null,"max-data-points","max-data-points",1229305590),(100),new cljs.core.Keyword(null,"max-log-entries","max-log-entries",-1076382213),(100),new cljs.core.Keyword(null,"debug","debug",-1608172596),false,new cljs.core.Keyword(null,"simulation","simulation",-1001480470),true], null));
/**
* Event channel for websocket messages
*/
testdrive.core.event_ch = cljs.core.async.chan.call(null,(10));
/**
* Channel for websocket state change updates
*/
testdrive.core.connection_ch = cljs.core.async.chan.call(null);
testdrive.core.config = (function config(k){return cljs.core.get.call(null,cljs.core.deref.call(null,testdrive.core.app_state),k);
});
testdrive.core.ws_url = (function ws_url(){return ("ws://localhost:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(testdrive.core.config.call(null,new cljs.core.Keyword(null,"port","port",1534937262)))+"/events");
});
testdrive.core.debug = (function debug(){return testdrive.core.config.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));
});
/**
* Fetches a defined label from the app-state, or uses a generic one
*/
testdrive.core.label_for = (function label_for(label_id){if(cljs.core._EQ_.call(null,label_id,(0)))
{return ("GENERAL");
} else
{var temp__4124__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"labels","labels",-626734591).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,testdrive.core.app_state)),label_id);if(cljs.core.truth_(temp__4124__auto__))
{var label = temp__4124__auto__;return clojure.string.upper_case.call(null,label);
} else
{return ("LABEL "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label_id));
}
}
});
/**
* A map containing user facing strings for unit types
*/
testdrive.core.unit_for = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"temperature","temperature",899018429),"celsius (C)",new cljs.core.Keyword(null,"humidity","humidity",-2051231184),"percent (%)",new cljs.core.Keyword(null,"pressure","pressure",505343747),"hectopascals (hPa)",new cljs.core.Keyword(null,"altitude","altitude",463588637),"meters (m)",new cljs.core.Keyword(null,"voltage","voltage",-1909388658),"volts (V)",new cljs.core.Keyword(null,"current","current",-1088038603),"milliamps (mA)"], null);
/**
* Process a new sensor event by adding it's value to the app-state
*/
testdrive.core.process_new_event = (function process_new_event(cursor,p__9688){var map__9690 = p__9688;var map__9690__$1 = ((cljs.core.seq_QMARK_.call(null,map__9690))?cljs.core.apply.call(null,cljs.core.hash_map,map__9690):map__9690);var payload = map__9690__$1;var timestamp = cljs.core.get.call(null,map__9690__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));var value = cljs.core.get.call(null,map__9690__$1,new cljs.core.Keyword(null,"value","value",305978217));var id = cljs.core.get.call(null,map__9690__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var kind = cljs.core.get.call(null,map__9690__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));return om.core.transact_BANG_.call(null,cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sensors","sensors",-1987490738),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"label-id","label-id",-1465071949),id], null),new cljs.core.Keyword(null,"values","values",372645556)], null),((function (map__9690,map__9690__$1,payload,timestamp,value,id,kind){
return (function (p1__9687_SHARP_){return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.take_last.call(null,testdrive.core.config.call(null,new cljs.core.Keyword(null,"max-data-points","max-data-points",1229305590)),p1__9687_SHARP_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,timestamp], null));
});})(map__9690,map__9690__$1,payload,timestamp,value,id,kind))
);
});
/**
* Process a label by adding it to the app-state
*/
testdrive.core.process_new_label = (function process_new_label(cursor,p__9691){var map__9693 = p__9691;var map__9693__$1 = ((cljs.core.seq_QMARK_.call(null,map__9693))?cljs.core.apply.call(null,cljs.core.hash_map,map__9693):map__9693);var payload = map__9693__$1;var value = cljs.core.get.call(null,map__9693__$1,new cljs.core.Keyword(null,"value","value",305978217));var id = cljs.core.get.call(null,map__9693__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return om.core.update_BANG_.call(null,cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"labels","labels",-626734591),id], null),value);
});
/**
* Process a log message by adding is to the app-state
*/
testdrive.core.process_new_log = (function process_new_log(cursor,p__9695){var map__9697 = p__9695;var map__9697__$1 = ((cljs.core.seq_QMARK_.call(null,map__9697))?cljs.core.apply.call(null,cljs.core.hash_map,map__9697):map__9697);var payload = map__9697__$1;var value = cljs.core.get.call(null,map__9697__$1,new cljs.core.Keyword(null,"value","value",305978217));var id = cljs.core.get.call(null,map__9697__$1,new cljs.core.Keyword(null,"id","id",-1388402092));return om.core.transact_BANG_.call(null,cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"console","console",1228072057)], null),((function (map__9697,map__9697__$1,payload,value,id){
return (function (p1__9694_SHARP_){return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.take_last.call(null,testdrive.core.config.call(null,new cljs.core.Keyword(null,"max-log-entries","max-log-entries",-1076382213)),p1__9694_SHARP_)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"value","value",305978217),value], null));
});})(map__9697,map__9697__$1,payload,value,id))
);
});
testdrive.core.widget_header = (function widget_header(cursor,owner){var title = clojure.string.upper_case.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(cljs.core.key.call(null,cursor))));if(typeof testdrive.core.t9701 !== 'undefined')
{} else
{
/**
* @constructor
*/
testdrive.core.t9701 = (function (title,owner,cursor,widget_header,meta9702){
this.title = title;
this.owner = owner;
this.cursor = cursor;
this.widget_header = widget_header;
this.meta9702 = meta9702;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
testdrive.core.t9701.cljs$lang$type = true;
testdrive.core.t9701.cljs$lang$ctorStr = "testdrive.core/t9701";
testdrive.core.t9701.cljs$lang$ctorPrWriter = ((function (title){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"testdrive.core/t9701");
});})(title))
;
testdrive.core.t9701.prototype.om$core$IRender$ = true;
testdrive.core.t9701.prototype.om$core$IRender$render$arity$1 = ((function (title){
return (function (this__5129__auto__){var self__ = this;
var this__5129__auto____$1 = this;return React.DOM.div({"className": "header"},React.DOM.span({"className": "glyphicon glyphicon-dashboard"}),React.DOM.span({"className": "title"},self__.title));
});})(title))
;
testdrive.core.t9701.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (title){
return (function (_9703){var self__ = this;
var _9703__$1 = this;return self__.meta9702;
});})(title))
;
testdrive.core.t9701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (title){
return (function (_9703,meta9702__$1){var self__ = this;
var _9703__$1 = this;return (new testdrive.core.t9701(self__.title,self__.owner,self__.cursor,self__.widget_header,meta9702__$1));
});})(title))
;
testdrive.core.__GT_t9701 = ((function (title){
return (function __GT_t9701(title__$1,owner__$1,cursor__$1,widget_header__$1,meta9702){return (new testdrive.core.t9701(title__$1,owner__$1,cursor__$1,widget_header__$1,meta9702));
});})(title))
;
}
return (new testdrive.core.t9701(title,owner,cursor,widget_header,null));
});
testdrive.core.text_widget_content = (function text_widget_content(cursor,owner){var value = cljs.core.first.call(null,cljs.core.last.call(null,new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cursor))));var unit = testdrive.core.unit_for.call(null,new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(cljs.core.key.call(null,cursor)));var label = testdrive.core.label_for.call(null,new cljs.core.Keyword(null,"label-id","label-id",-1465071949).cljs$core$IFn$_invoke$arity$1(cljs.core.key.call(null,cursor)));if(typeof testdrive.core.t9707 !== 'undefined')
{} else
{
/**
* @constructor
*/
testdrive.core.t9707 = (function (label,unit,value,owner,cursor,text_widget_content,meta9708){
this.label = label;
this.unit = unit;
this.value = value;
this.owner = owner;
this.cursor = cursor;
this.text_widget_content = text_widget_content;
this.meta9708 = meta9708;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
testdrive.core.t9707.cljs$lang$type = true;
testdrive.core.t9707.cljs$lang$ctorStr = "testdrive.core/t9707";
testdrive.core.t9707.cljs$lang$ctorPrWriter = ((function (value,unit,label){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"testdrive.core/t9707");
});})(value,unit,label))
;
testdrive.core.t9707.prototype.om$core$IRender$ = true;
testdrive.core.t9707.prototype.om$core$IRender$render$arity$1 = ((function (value,unit,label){
return (function (this__5129__auto__){var self__ = this;
var this__5129__auto____$1 = this;return React.DOM.div({"className": "content"},React.DOM.strong(null,self__.value),React.DOM.small({"className": "units"},self__.unit),React.DOM.small(null,self__.label));
});})(value,unit,label))
;
testdrive.core.t9707.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (value,unit,label){
return (function (_9709){var self__ = this;
var _9709__$1 = this;return self__.meta9708;
});})(value,unit,label))
;
testdrive.core.t9707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (value,unit,label){
return (function (_9709,meta9708__$1){var self__ = this;
var _9709__$1 = this;return (new testdrive.core.t9707(self__.label,self__.unit,self__.value,self__.owner,self__.cursor,self__.text_widget_content,meta9708__$1));
});})(value,unit,label))
;
testdrive.core.__GT_t9707 = ((function (value,unit,label){
return (function __GT_t9707(label__$1,unit__$1,value__$1,owner__$1,cursor__$1,text_widget_content__$1,meta9708){return (new testdrive.core.t9707(label__$1,unit__$1,value__$1,owner__$1,cursor__$1,text_widget_content__$1,meta9708));
});})(value,unit,label))
;
}
return (new testdrive.core.t9707(label,unit,value,owner,cursor,text_widget_content,null));
});
testdrive.core.widget_footer = (function widget_footer(cursor,owner){if(typeof testdrive.core.t9713 !== 'undefined')
{} else
{
/**
* @constructor
*/
testdrive.core.t9713 = (function (owner,cursor,widget_footer,meta9714){
this.owner = owner;
this.cursor = cursor;
this.widget_footer = widget_footer;
this.meta9714 = meta9714;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
testdrive.core.t9713.cljs$lang$type = true;
testdrive.core.t9713.cljs$lang$ctorStr = "testdrive.core/t9713";
testdrive.core.t9713.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"testdrive.core/t9713");
});
testdrive.core.t9713.prototype.om$core$IRender$ = true;
testdrive.core.t9713.prototype.om$core$IRender$render$arity$1 = (function (this__5129__auto__){var self__ = this;
var this__5129__auto____$1 = this;return React.DOM.div({"className": "footer"},"just updated");
});
testdrive.core.t9713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9715){var self__ = this;
var _9715__$1 = this;return self__.meta9714;
});
testdrive.core.t9713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9715,meta9714__$1){var self__ = this;
var _9715__$1 = this;return (new testdrive.core.t9713(self__.owner,self__.cursor,self__.widget_footer,meta9714__$1));
});
testdrive.core.__GT_t9713 = (function __GT_t9713(owner__$1,cursor__$1,widget_footer__$1,meta9714){return (new testdrive.core.t9713(owner__$1,cursor__$1,widget_footer__$1,meta9714));
});
}
return (new testdrive.core.t9713(owner,cursor,widget_footer,null));
});
testdrive.core.text_widget = (function text_widget(cursor,owner){var kind_class = cljs.core.name.call(null,new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(cljs.core.key.call(null,cursor)));if(typeof testdrive.core.t9719 !== 'undefined')
{} else
{
/**
* @constructor
*/
testdrive.core.t9719 = (function (kind_class,owner,cursor,text_widget,meta9720){
this.kind_class = kind_class;
this.owner = owner;
this.cursor = cursor;
this.text_widget = text_widget;
this.meta9720 = meta9720;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
testdrive.core.t9719.cljs$lang$type = true;
testdrive.core.t9719.cljs$lang$ctorStr = "testdrive.core/t9719";
testdrive.core.t9719.cljs$lang$ctorPrWriter = ((function (kind_class){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"testdrive.core/t9719");
});})(kind_class))
;
testdrive.core.t9719.prototype.om$core$IRender$ = true;
testdrive.core.t9719.prototype.om$core$IRender$render$arity$1 = ((function (kind_class){
return (function (this__5129__auto__){var self__ = this;
var this__5129__auto____$1 = this;return React.DOM.li({"className": ("widget "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.kind_class))},om.core.build.call(null,testdrive.core.widget_header,self__.cursor),om.core.build.call(null,testdrive.core.text_widget_content,self__.cursor),om.core.build.call(null,testdrive.core.widget_footer,self__.cursor));
});})(kind_class))
;
testdrive.core.t9719.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (kind_class){
return (function (_9721){var self__ = this;
var _9721__$1 = this;return self__.meta9720;
});})(kind_class))
;
testdrive.core.t9719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (kind_class){
return (function (_9721,meta9720__$1){var self__ = this;
var _9721__$1 = this;return (new testdrive.core.t9719(self__.kind_class,self__.owner,self__.cursor,self__.text_widget,meta9720__$1));
});})(kind_class))
;
testdrive.core.__GT_t9719 = ((function (kind_class){
return (function __GT_t9719(kind_class__$1,owner__$1,cursor__$1,text_widget__$1,meta9720){return (new testdrive.core.t9719(kind_class__$1,owner__$1,cursor__$1,text_widget__$1,meta9720));
});})(kind_class))
;
}
return (new testdrive.core.t9719(kind_class,owner,cursor,text_widget,null));
});
testdrive.core.widget_list = (function widget_list(cursor,owner){if(typeof testdrive.core.t9797 !== 'undefined')
{} else
{
/**
* @constructor
*/
testdrive.core.t9797 = (function (owner,cursor,widget_list,meta9798){
this.owner = owner;
this.cursor = cursor;
this.widget_list = widget_list;
this.meta9798 = meta9798;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
testdrive.core.t9797.cljs$lang$type = true;
testdrive.core.t9797.cljs$lang$ctorStr = "testdrive.core/t9797";
testdrive.core.t9797.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"testdrive.core/t9797");
});
testdrive.core.t9797.prototype.om$core$IRender$ = true;
testdrive.core.t9797.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.ul({"className": "widgets grid"},cljs.core.into_array.call(null,cljs.core.map.call(null,((function (___$1){
return (function (p1__9722_SHARP_){return om.core.build.call(null,testdrive.core.text_widget,p1__9722_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),cljs.core.key.call(null,p1__9722_SHARP_)], null));
});})(___$1))
,new cljs.core.Keyword(null,"sensors","sensors",-1987490738).cljs$core$IFn$_invoke$arity$1(self__.cursor))));
});
testdrive.core.t9797.prototype.om$core$IWillMount$ = true;
testdrive.core.t9797.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__6368__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6368__auto__,___$1){
return (function (){var f__6369__auto__ = (function (){var switch__6353__auto__ = ((function (c__6368__auto__,___$1){
return (function (state_9837){var state_val_9838 = (state_9837[(1)]);if((state_val_9838 === (7)))
{var inst_9803 = (state_9837[(7)]);var inst_9803__$1 = (state_9837[(2)]);var state_9837__$1 = (function (){var statearr_9839 = state_9837;(statearr_9839[(7)] = inst_9803__$1);
return statearr_9839;
})();if(cljs.core.truth_(inst_9803__$1))
{var statearr_9840_9871 = state_9837__$1;(statearr_9840_9871[(1)] = (8));
} else
{var statearr_9841_9872 = state_9837__$1;(statearr_9841_9872[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9838 === (1)))
{var state_9837__$1 = state_9837;var statearr_9842_9873 = state_9837__$1;(statearr_9842_9873[(2)] = null);
(statearr_9842_9873[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9838 === (4)))
{var state_9837__$1 = state_9837;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9837__$1,(7),testdrive.core.event_ch);
} else
{if((state_val_9838 === (15)))
{var inst_9805 = (state_9837[(8)]);var inst_9817 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"log","log",-1595516004),inst_9805);var state_9837__$1 = state_9837;if(inst_9817)
{var statearr_9843_9874 = state_9837__$1;(statearr_9843_9874[(1)] = (17));
} else
{var statearr_9844_9875 = state_9837__$1;(statearr_9844_9875[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9838 === (13)))
{var inst_9826 = (state_9837[(2)]);var state_9837__$1 = state_9837;var statearr_9845_9876 = state_9837__$1;(statearr_9845_9876[(2)] = inst_9826);
(statearr_9845_9876[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9838 === (6)))
{var inst_9833 = (state_9837[(2)]);var state_9837__$1 = state_9837;var statearr_9846_9877 = state_9837__$1;(statearr_9846_9877[(2)] = inst_9833);
(statearr_9846_9877[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9838 === (17)))
{var inst_9803 = (state_9837[(7)]);var inst_9819 = testdrive.core.process_new_log.call(null,self__.cursor,inst_9803);var state_9837__$1 = state_9837;var statearr_9847_9878 = state_9837__$1;(statearr_9847_9878[(2)] = inst_9819);
(statearr_9847_9878[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9838 === (3)))
{var inst_9835 = (state_9837[(2)]);var state_9837__$1 = state_9837;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9837__$1,inst_9835);
} else
{if((state_val_9838 === (12)))
{var inst_9805 = (state_9837[(8)]);var inst_9813 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"event","event",301435442),inst_9805);var state_9837__$1 = state_9837;if(inst_9813)
{var statearr_9848_9879 = state_9837__$1;(statearr_9848_9879[(1)] = (14));
} else
{var statearr_9849_9880 = state_9837__$1;(statearr_9849_9880[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9838 === (2)))
{var state_9837__$1 = state_9837;var statearr_9850_9881 = state_9837__$1;(statearr_9850_9881[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9838 === (19)))
{var inst_9822 = (state_9837[(2)]);var state_9837__$1 = state_9837;var statearr_9852_9882 = state_9837__$1;(statearr_9852_9882[(2)] = inst_9822);
(statearr_9852_9882[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9838 === (11)))
{var inst_9803 = (state_9837[(7)]);var inst_9811 = testdrive.core.process_new_label.call(null,self__.cursor,inst_9803);var state_9837__$1 = state_9837;var statearr_9853_9883 = state_9837__$1;(statearr_9853_9883[(2)] = inst_9811);
(statearr_9853_9883[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9838 === (9)))
{var state_9837__$1 = state_9837;var statearr_9854_9884 = state_9837__$1;(statearr_9854_9884[(2)] = null);
(statearr_9854_9884[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9838 === (5)))
{var state_9837__$1 = state_9837;var statearr_9855_9885 = state_9837__$1;(statearr_9855_9885[(2)] = null);
(statearr_9855_9885[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9838 === (14)))
{var inst_9803 = (state_9837[(7)]);var inst_9815 = testdrive.core.process_new_event.call(null,self__.cursor,inst_9803);var state_9837__$1 = state_9837;var statearr_9856_9886 = state_9837__$1;(statearr_9856_9886[(2)] = inst_9815);
(statearr_9856_9886[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9838 === (16)))
{var inst_9824 = (state_9837[(2)]);var state_9837__$1 = state_9837;var statearr_9857_9887 = state_9837__$1;(statearr_9857_9887[(2)] = inst_9824);
(statearr_9857_9887[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9838 === (10)))
{var inst_9829 = (state_9837[(2)]);var state_9837__$1 = (function (){var statearr_9858 = state_9837;(statearr_9858[(9)] = inst_9829);
return statearr_9858;
})();var statearr_9859_9888 = state_9837__$1;(statearr_9859_9888[(2)] = null);
(statearr_9859_9888[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9838 === (18)))
{var state_9837__$1 = state_9837;var statearr_9860_9889 = state_9837__$1;(statearr_9860_9889[(2)] = null);
(statearr_9860_9889[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9838 === (8)))
{var inst_9805 = (state_9837[(8)]);var inst_9803 = (state_9837[(7)]);var inst_9805__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(inst_9803);var inst_9809 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"label","label",1718410804),inst_9805__$1);var state_9837__$1 = (function (){var statearr_9861 = state_9837;(statearr_9861[(8)] = inst_9805__$1);
return statearr_9861;
})();if(inst_9809)
{var statearr_9862_9890 = state_9837__$1;(statearr_9862_9890[(1)] = (11));
} else
{var statearr_9863_9891 = state_9837__$1;(statearr_9863_9891[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6368__auto__,___$1))
;return ((function (switch__6353__auto__,c__6368__auto__,___$1){
return (function() {
var state_machine__6354__auto__ = null;
var state_machine__6354__auto____0 = (function (){var statearr_9867 = [null,null,null,null,null,null,null,null,null,null];(statearr_9867[(0)] = state_machine__6354__auto__);
(statearr_9867[(1)] = (1));
return statearr_9867;
});
var state_machine__6354__auto____1 = (function (state_9837){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_9837);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e9868){if((e9868 instanceof Object))
{var ex__6357__auto__ = e9868;var statearr_9869_9892 = state_9837;(statearr_9869_9892[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9837);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9868;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9893 = state_9837;
state_9837 = G__9893;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_9837){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_9837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto__,___$1))
})();var state__6370__auto__ = (function (){var statearr_9870 = f__6369__auto__.call(null);(statearr_9870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto__);
return statearr_9870;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6370__auto__);
});})(c__6368__auto__,___$1))
);
return c__6368__auto__;
});
testdrive.core.t9797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9799){var self__ = this;
var _9799__$1 = this;return self__.meta9798;
});
testdrive.core.t9797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9799,meta9798__$1){var self__ = this;
var _9799__$1 = this;return (new testdrive.core.t9797(self__.owner,self__.cursor,self__.widget_list,meta9798__$1));
});
testdrive.core.__GT_t9797 = (function __GT_t9797(owner__$1,cursor__$1,widget_list__$1,meta9798){return (new testdrive.core.t9797(owner__$1,cursor__$1,widget_list__$1,meta9798));
});
}
return (new testdrive.core.t9797(owner,cursor,widget_list,null));
});
testdrive.core.console_entry = (function console_entry(p__9894,owner){var map__9899 = p__9894;var map__9899__$1 = ((cljs.core.seq_QMARK_.call(null,map__9899))?cljs.core.apply.call(null,cljs.core.hash_map,map__9899):map__9899);var cursor = map__9899__$1;var value = cljs.core.get.call(null,map__9899__$1,new cljs.core.Keyword(null,"value","value",305978217));var id = cljs.core.get.call(null,map__9899__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var label = testdrive.core.label_for.call(null,id);var timestamp = cljs_time.format.unparse.call(null,cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"date-hour-minute-second","date-hour-minute-second",-1565419364)),cljs_time.core.now.call(null));if(typeof testdrive.core.t9900 !== 'undefined')
{} else
{
/**
* @constructor
*/
testdrive.core.t9900 = (function (timestamp,label,id,value,cursor,map__9899,owner,p__9894,console_entry,meta9901){
this.timestamp = timestamp;
this.label = label;
this.id = id;
this.value = value;
this.cursor = cursor;
this.map__9899 = map__9899;
this.owner = owner;
this.p__9894 = p__9894;
this.console_entry = console_entry;
this.meta9901 = meta9901;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
testdrive.core.t9900.cljs$lang$type = true;
testdrive.core.t9900.cljs$lang$ctorStr = "testdrive.core/t9900";
testdrive.core.t9900.cljs$lang$ctorPrWriter = ((function (label,timestamp,map__9899,map__9899__$1,cursor,value,id){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"testdrive.core/t9900");
});})(label,timestamp,map__9899,map__9899__$1,cursor,value,id))
;
testdrive.core.t9900.prototype.om$core$IRender$ = true;
testdrive.core.t9900.prototype.om$core$IRender$render$arity$1 = ((function (label,timestamp,map__9899,map__9899__$1,cursor,value,id){
return (function (this__5129__auto__){var self__ = this;
var this__5129__auto____$1 = this;return React.DOM.li(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.timestamp)+" ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.label)+"]: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.value)));
});})(label,timestamp,map__9899,map__9899__$1,cursor,value,id))
;
testdrive.core.t9900.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (label,timestamp,map__9899,map__9899__$1,cursor,value,id){
return (function (_9902){var self__ = this;
var _9902__$1 = this;return self__.meta9901;
});})(label,timestamp,map__9899,map__9899__$1,cursor,value,id))
;
testdrive.core.t9900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (label,timestamp,map__9899,map__9899__$1,cursor,value,id){
return (function (_9902,meta9901__$1){var self__ = this;
var _9902__$1 = this;return (new testdrive.core.t9900(self__.timestamp,self__.label,self__.id,self__.value,self__.cursor,self__.map__9899,self__.owner,self__.p__9894,self__.console_entry,meta9901__$1));
});})(label,timestamp,map__9899,map__9899__$1,cursor,value,id))
;
testdrive.core.__GT_t9900 = ((function (label,timestamp,map__9899,map__9899__$1,cursor,value,id){
return (function __GT_t9900(timestamp__$1,label__$1,id__$1,value__$1,cursor__$1,map__9899__$2,owner__$1,p__9894__$1,console_entry__$1,meta9901){return (new testdrive.core.t9900(timestamp__$1,label__$1,id__$1,value__$1,cursor__$1,map__9899__$2,owner__$1,p__9894__$1,console_entry__$1,meta9901));
});})(label,timestamp,map__9899,map__9899__$1,cursor,value,id))
;
}
return (new testdrive.core.t9900(timestamp,label,id,value,cursor,map__9899__$1,owner,p__9894,console_entry,null));
});
testdrive.core.console = (function console__$1(cursor,owner){if(typeof testdrive.core.t9907 !== 'undefined')
{} else
{
/**
* @constructor
*/
testdrive.core.t9907 = (function (owner,cursor,console,meta9908){
this.owner = owner;
this.cursor = cursor;
this.console = console;
this.meta9908 = meta9908;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
testdrive.core.t9907.cljs$lang$type = true;
testdrive.core.t9907.cljs$lang$ctorStr = "testdrive.core/t9907";
testdrive.core.t9907.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"testdrive.core/t9907");
});
testdrive.core.t9907.prototype.om$core$IRender$ = true;
testdrive.core.t9907.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": ("console"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"console-hidden?","console-hidden?",-230453177).cljs$core$IFn$_invoke$arity$1(self__.cursor))?"hidden":null))), "id": "console"},React.DOM.div({"className": "header"},React.DOM.span({"className": "glyphicon glyphicon-dashboard"}),React.DOM.span({"className": "title"},"CONSOLE")),React.DOM.div({"className": "content", "id": "console-content"},React.DOM.ul(null,cljs.core.into_array.call(null,cljs.core.map.call(null,((function (___$1){
return (function (p1__9903_SHARP_){return om.core.build.call(null,testdrive.core.console_entry,p1__9903_SHARP_);
});})(___$1))
,new cljs.core.Keyword(null,"console","console",1228072057).cljs$core$IFn$_invoke$arity$1(self__.cursor))))));
});
testdrive.core.t9907.prototype.om$core$IDidUpdate$ = true;
testdrive.core.t9907.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;var console_9910__$2 = document.getElementById("console-content");console_9910__$2.scrollTop = console_9910__$2.scrollHeight;
if(!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"console","console",1228072057).cljs$core$IFn$_invoke$arity$1(self__.cursor))))
{return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"console-hidden?","console-hidden?",-230453177)], null),false);
} else
{return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"console-hidden?","console-hidden?",-230453177)], null),true);
}
});
testdrive.core.t9907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9909){var self__ = this;
var _9909__$1 = this;return self__.meta9908;
});
testdrive.core.t9907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9909,meta9908__$1){var self__ = this;
var _9909__$1 = this;return (new testdrive.core.t9907(self__.owner,self__.cursor,self__.console,meta9908__$1));
});
testdrive.core.__GT_t9907 = (function __GT_t9907(owner__$1,cursor__$1,console__$1,meta9908){return (new testdrive.core.t9907(owner__$1,cursor__$1,console__$1,meta9908));
});
}
return (new testdrive.core.t9907(owner,cursor,console__$1,null));
});
/**
* Component to show when no connection
*/
testdrive.core.not_connected = (function not_connected(cursor,owner){if(typeof testdrive.core.t9914 !== 'undefined')
{} else
{
/**
* @constructor
*/
testdrive.core.t9914 = (function (owner,cursor,not_connected,meta9915){
this.owner = owner;
this.cursor = cursor;
this.not_connected = not_connected;
this.meta9915 = meta9915;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
testdrive.core.t9914.cljs$lang$type = true;
testdrive.core.t9914.cljs$lang$ctorStr = "testdrive.core/t9914";
testdrive.core.t9914.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"testdrive.core/t9914");
});
testdrive.core.t9914.prototype.om$core$IRender$ = true;
testdrive.core.t9914.prototype.om$core$IRender$render$arity$1 = (function (this__5129__auto__){var self__ = this;
var this__5129__auto____$1 = this;return React.DOM.div({"className": "no-connection"},React.DOM.h2(null,"Awaiting connection..."),React.DOM.a({"href": "https://github.com/blakejakopovic/TestDrive"},"This seems to be taking a while...?"));
});
testdrive.core.t9914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9916){var self__ = this;
var _9916__$1 = this;return self__.meta9915;
});
testdrive.core.t9914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9916,meta9915__$1){var self__ = this;
var _9916__$1 = this;return (new testdrive.core.t9914(self__.owner,self__.cursor,self__.not_connected,meta9915__$1));
});
testdrive.core.__GT_t9914 = (function __GT_t9914(owner__$1,cursor__$1,not_connected__$1,meta9915){return (new testdrive.core.t9914(owner__$1,cursor__$1,not_connected__$1,meta9915));
});
}
return (new testdrive.core.t9914(owner,cursor,not_connected,null));
});
/**
* Dashboard header with logo and actions
*/
testdrive.core.header_bar = (function header_bar(cursor,owner){if(typeof testdrive.core.t9920 !== 'undefined')
{} else
{
/**
* @constructor
*/
testdrive.core.t9920 = (function (owner,cursor,header_bar,meta9921){
this.owner = owner;
this.cursor = cursor;
this.header_bar = header_bar;
this.meta9921 = meta9921;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
testdrive.core.t9920.cljs$lang$type = true;
testdrive.core.t9920.cljs$lang$ctorStr = "testdrive.core/t9920";
testdrive.core.t9920.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"testdrive.core/t9920");
});
testdrive.core.t9920.prototype.om$core$IRender$ = true;
testdrive.core.t9920.prototype.om$core$IRender$render$arity$1 = (function (this__5129__auto__){var self__ = this;
var this__5129__auto____$1 = this;return React.DOM.div({"className": "header clearfix", "id": "header"},React.DOM.div({"className": "logo"},React.DOM.span({"className": "glyphicon glyphicon-dashboard"}),React.DOM.span({"className": "title"},"TestDrive Dashboard")),React.DOM.div({"className": "actions"},""));
});
testdrive.core.t9920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9922){var self__ = this;
var _9922__$1 = this;return self__.meta9921;
});
testdrive.core.t9920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9922,meta9921__$1){var self__ = this;
var _9922__$1 = this;return (new testdrive.core.t9920(self__.owner,self__.cursor,self__.header_bar,meta9921__$1));
});
testdrive.core.__GT_t9920 = (function __GT_t9920(owner__$1,cursor__$1,header_bar__$1,meta9921){return (new testdrive.core.t9920(owner__$1,cursor__$1,header_bar__$1,meta9921));
});
}
return (new testdrive.core.t9920(owner,cursor,header_bar,null));
});
/**
* OM Root function
*/
testdrive.core.dashboard = (function dashboard(cursor,owner){if(typeof testdrive.core.t9991 !== 'undefined')
{} else
{
/**
* @constructor
*/
testdrive.core.t9991 = (function (owner,cursor,dashboard,meta9992){
this.owner = owner;
this.cursor = cursor;
this.dashboard = dashboard;
this.meta9992 = meta9992;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
testdrive.core.t9991.cljs$lang$type = true;
testdrive.core.t9991.cljs$lang$ctorStr = "testdrive.core/t9991";
testdrive.core.t9991.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"testdrive.core/t9991");
});
testdrive.core.t9991.prototype.om$core$IRender$ = true;
testdrive.core.t9991.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(new cljs.core.Keyword(null,"connected?","connected?",-1197551387).cljs$core$IFn$_invoke$arity$1(self__.cursor)))
{return React.DOM.div({"id": "dashboard"},om.core.build.call(null,testdrive.core.widget_list,self__.cursor),om.core.build.call(null,testdrive.core.console,self__.cursor));
} else
{return om.core.build.call(null,testdrive.core.not_connected,self__.cursor);
}
});
testdrive.core.t9991.prototype.om$core$IWillMount$ = true;
testdrive.core.t9991.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__6368__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6368__auto__,___$1){
return (function (){var f__6369__auto__ = (function (){var switch__6353__auto__ = ((function (c__6368__auto__,___$1){
return (function (state_10030){var state_val_10031 = (state_10030[(1)]);if((state_val_10031 === (7)))
{var inst_9997 = (state_10030[(7)]);var inst_9997__$1 = (state_10030[(2)]);var state_10030__$1 = (function (){var statearr_10032 = state_10030;(statearr_10032[(7)] = inst_9997__$1);
return statearr_10032;
})();if(cljs.core.truth_(inst_9997__$1))
{var statearr_10033_10059 = state_10030__$1;(statearr_10033_10059[(1)] = (8));
} else
{var statearr_10034_10060 = state_10030__$1;(statearr_10034_10060[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10031 === (1)))
{var state_10030__$1 = state_10030;var statearr_10035_10061 = state_10030__$1;(statearr_10035_10061[(2)] = null);
(statearr_10035_10061[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10031 === (4)))
{var state_10030__$1 = state_10030;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10030__$1,(7),testdrive.core.connection_ch);
} else
{if((state_val_10031 === (15)))
{var state_10030__$1 = state_10030;var statearr_10036_10062 = state_10030__$1;(statearr_10036_10062[(2)] = null);
(statearr_10036_10062[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10031 === (13)))
{var inst_10019 = (state_10030[(2)]);var state_10030__$1 = state_10030;var statearr_10037_10063 = state_10030__$1;(statearr_10037_10063[(2)] = inst_10019);
(statearr_10037_10063[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10031 === (6)))
{var inst_10026 = (state_10030[(2)]);var state_10030__$1 = state_10030;var statearr_10038_10064 = state_10030__$1;(statearr_10038_10064[(2)] = inst_10026);
(statearr_10038_10064[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10031 === (3)))
{var inst_10028 = (state_10030[(2)]);var state_10030__$1 = state_10030;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10030__$1,inst_10028);
} else
{if((state_val_10031 === (12)))
{var inst_9997 = (state_10030[(7)]);var inst_10009 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"close","close",1835149582),inst_9997);var state_10030__$1 = state_10030;if(inst_10009)
{var statearr_10039_10065 = state_10030__$1;(statearr_10039_10065[(1)] = (14));
} else
{var statearr_10040_10066 = state_10030__$1;(statearr_10040_10066[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10031 === (2)))
{var state_10030__$1 = state_10030;var statearr_10041_10067 = state_10030__$1;(statearr_10041_10067[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10031 === (11)))
{var inst_10004 = cljs.core.PersistentVector.EMPTY_NODE;var inst_10005 = [new cljs.core.Keyword(null,"connected?","connected?",-1197551387)];var inst_10006 = (new cljs.core.PersistentVector(null,1,(5),inst_10004,inst_10005,null));var inst_10007 = om.core.update_BANG_.call(null,self__.cursor,inst_10006,true);var state_10030__$1 = state_10030;var statearr_10043_10068 = state_10030__$1;(statearr_10043_10068[(2)] = inst_10007);
(statearr_10043_10068[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10031 === (9)))
{var state_10030__$1 = state_10030;var statearr_10044_10069 = state_10030__$1;(statearr_10044_10069[(2)] = null);
(statearr_10044_10069[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10031 === (5)))
{var state_10030__$1 = state_10030;var statearr_10045_10070 = state_10030__$1;(statearr_10045_10070[(2)] = null);
(statearr_10045_10070[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10031 === (14)))
{var inst_10011 = cljs.core.PersistentVector.EMPTY_NODE;var inst_10012 = [new cljs.core.Keyword(null,"connected?","connected?",-1197551387)];var inst_10013 = (new cljs.core.PersistentVector(null,1,(5),inst_10011,inst_10012,null));var inst_10014 = om.core.update_BANG_.call(null,self__.cursor,inst_10013,false);var state_10030__$1 = state_10030;var statearr_10046_10071 = state_10030__$1;(statearr_10046_10071[(2)] = inst_10014);
(statearr_10046_10071[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10031 === (16)))
{var inst_10017 = (state_10030[(2)]);var state_10030__$1 = state_10030;var statearr_10047_10072 = state_10030__$1;(statearr_10047_10072[(2)] = inst_10017);
(statearr_10047_10072[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10031 === (10)))
{var inst_10022 = (state_10030[(2)]);var state_10030__$1 = (function (){var statearr_10048 = state_10030;(statearr_10048[(8)] = inst_10022);
return statearr_10048;
})();var statearr_10049_10073 = state_10030__$1;(statearr_10049_10073[(2)] = null);
(statearr_10049_10073[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10031 === (8)))
{var inst_9997 = (state_10030[(7)]);var inst_10002 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"open","open",-1763596448),inst_9997);var state_10030__$1 = state_10030;if(inst_10002)
{var statearr_10050_10074 = state_10030__$1;(statearr_10050_10074[(1)] = (11));
} else
{var statearr_10051_10075 = state_10030__$1;(statearr_10051_10075[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6368__auto__,___$1))
;return ((function (switch__6353__auto__,c__6368__auto__,___$1){
return (function() {
var state_machine__6354__auto__ = null;
var state_machine__6354__auto____0 = (function (){var statearr_10055 = [null,null,null,null,null,null,null,null,null];(statearr_10055[(0)] = state_machine__6354__auto__);
(statearr_10055[(1)] = (1));
return statearr_10055;
});
var state_machine__6354__auto____1 = (function (state_10030){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_10030);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e10056){if((e10056 instanceof Object))
{var ex__6357__auto__ = e10056;var statearr_10057_10076 = state_10030;(statearr_10057_10076[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10030);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10056;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10077 = state_10030;
state_10030 = G__10077;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_10030){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_10030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto__,___$1))
})();var state__6370__auto__ = (function (){var statearr_10058 = f__6369__auto__.call(null);(statearr_10058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto__);
return statearr_10058;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6370__auto__);
});})(c__6368__auto__,___$1))
);
return c__6368__auto__;
});
testdrive.core.t9991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9993){var self__ = this;
var _9993__$1 = this;return self__.meta9992;
});
testdrive.core.t9991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9993,meta9992__$1){var self__ = this;
var _9993__$1 = this;return (new testdrive.core.t9991(self__.owner,self__.cursor,self__.dashboard,meta9992__$1));
});
testdrive.core.__GT_t9991 = (function __GT_t9991(owner__$1,cursor__$1,dashboard__$1,meta9992){return (new testdrive.core.t9991(owner__$1,cursor__$1,dashboard__$1,meta9992));
});
}
return (new testdrive.core.t9991(owner,cursor,dashboard,null));
});
/**
* Simulate a real semi-random event
*/
testdrive.core.simulate_event = (function simulate_event(){return cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"value","value",305978217),(19.0 + cljs.core.rand_int.call(null,(8))),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),cljs_time.core.now.call(null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"value","value",305978217),((995) + cljs.core.rand_int.call(null,(11))),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),cljs_time.core.now.call(null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"humidity","humidity",-2051231184),new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"value","value",305978217),(58.0 + cljs.core.rand_int.call(null,(8))),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),cljs_time.core.now.call(null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"altitude","altitude",463588637),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"value","value",305978217),(15.0 + cljs.core.rand_int.call(null,(6))),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),cljs_time.core.now.call(null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"voltage","voltage",-1909388658),new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"value","value",305978217),(3.0 + cljs.core.rand_int.call(null,(2))),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),cljs_time.core.now.call(null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"value","value",305978217),"Main Bedroom"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"value","value",305978217),"Kitchen"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"value","value",305978217),"Hello"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"value","value",305978217),"World"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"value","value",305978217),"General message"], null)], null));
});
/**
* Start event simulation
*/
testdrive.core.simulate_events = (function simulate_events(){cljs.core.async.put_BANG_.call(null,testdrive.core.connection_ch,new cljs.core.Keyword(null,"open","open",-1763596448));
var c__6368__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6368__auto__){
return (function (){var f__6369__auto__ = (function (){var switch__6353__auto__ = ((function (c__6368__auto__){
return (function (state_10143){var state_val_10144 = (state_10143[(1)]);if((state_val_10144 === (7)))
{var inst_10126 = (state_10143[(2)]);var inst_10127 = testdrive.core.debug.call(null);var state_10143__$1 = (function (){var statearr_10145 = state_10143;(statearr_10145[(7)] = inst_10126);
return statearr_10145;
})();if(cljs.core.truth_(inst_10127))
{var statearr_10146_10166 = state_10143__$1;(statearr_10146_10166[(1)] = (8));
} else
{var statearr_10147_10167 = state_10143__$1;(statearr_10147_10167[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10144 === (1)))
{var state_10143__$1 = state_10143;var statearr_10148_10168 = state_10143__$1;(statearr_10148_10168[(2)] = null);
(statearr_10148_10168[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10144 === (4)))
{var inst_10124 = (state_10143[(8)]);var inst_10124__$1 = testdrive.core.simulate_event.call(null);var state_10143__$1 = (function (){var statearr_10149 = state_10143;(statearr_10149[(8)] = inst_10124__$1);
return statearr_10149;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10143__$1,(7),testdrive.core.event_ch,inst_10124__$1);
} else
{if((state_val_10144 === (6)))
{var inst_10139 = (state_10143[(2)]);var state_10143__$1 = state_10143;var statearr_10150_10169 = state_10143__$1;(statearr_10150_10169[(2)] = inst_10139);
(statearr_10150_10169[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10144 === (3)))
{var inst_10141 = (state_10143[(2)]);var state_10143__$1 = state_10143;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10143__$1,inst_10141);
} else
{if((state_val_10144 === (2)))
{var state_10143__$1 = state_10143;var statearr_10151_10170 = state_10143__$1;(statearr_10151_10170[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10144 === (11)))
{var inst_10135 = (state_10143[(2)]);var state_10143__$1 = (function (){var statearr_10153 = state_10143;(statearr_10153[(9)] = inst_10135);
return statearr_10153;
})();var statearr_10154_10171 = state_10143__$1;(statearr_10154_10171[(2)] = null);
(statearr_10154_10171[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10144 === (9)))
{var state_10143__$1 = state_10143;var statearr_10155_10172 = state_10143__$1;(statearr_10155_10172[(2)] = null);
(statearr_10155_10172[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10144 === (5)))
{var state_10143__$1 = state_10143;var statearr_10156_10173 = state_10143__$1;(statearr_10156_10173[(2)] = null);
(statearr_10156_10173[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10144 === (10)))
{var inst_10132 = (state_10143[(2)]);var inst_10133 = cljs.core.async.timeout.call(null,(100));var state_10143__$1 = (function (){var statearr_10157 = state_10143;(statearr_10157[(10)] = inst_10132);
return statearr_10157;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10143__$1,(11),inst_10133);
} else
{if((state_val_10144 === (8)))
{var inst_10124 = (state_10143[(8)]);var inst_10129 = cljs.core.println.call(null,"Simulated Event: ",inst_10124);var state_10143__$1 = state_10143;var statearr_10158_10174 = state_10143__$1;(statearr_10158_10174[(2)] = inst_10129);
(statearr_10158_10174[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6368__auto__))
;return ((function (switch__6353__auto__,c__6368__auto__){
return (function() {
var state_machine__6354__auto__ = null;
var state_machine__6354__auto____0 = (function (){var statearr_10162 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_10162[(0)] = state_machine__6354__auto__);
(statearr_10162[(1)] = (1));
return statearr_10162;
});
var state_machine__6354__auto____1 = (function (state_10143){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_10143);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e10163){if((e10163 instanceof Object))
{var ex__6357__auto__ = e10163;var statearr_10164_10175 = state_10143;(statearr_10164_10175[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10143);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10163;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10176 = state_10143;
state_10143 = G__10176;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_10143){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_10143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto__))
})();var state__6370__auto__ = (function (){var statearr_10165 = f__6369__auto__.call(null);(statearr_10165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto__);
return statearr_10165;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6370__auto__);
});})(c__6368__auto__))
);
return c__6368__auto__;
});
testdrive.core.ws_send = cljs.core.async.chan.call(null,(5));
testdrive.core.ws_receive = cljs.core.async.chan.call(null,(5));
/**
* Websocket setup and handler
*/
testdrive.core.init_websocket = (function init_websocket(){var ws = (new WebSocket(testdrive.core.ws_url.call(null)));ws.onopen = ((function (ws){
return (function (evt){cljs.core.async.put_BANG_.call(null,testdrive.core.connection_ch,new cljs.core.Keyword(null,"open","open",-1763596448));
if(cljs.core.truth_(testdrive.core.debug.call(null)))
{return cljs.core.println.call(null,"WS Open:",evt.data);
} else
{return null;
}
});})(ws))
;
ws.onclose = ((function (ws){
return (function (evt){cljs.core.async.put_BANG_.call(null,testdrive.core.connection_ch,new cljs.core.Keyword(null,"close","close",1835149582));
if(cljs.core.truth_(testdrive.core.debug.call(null)))
{return cljs.core.println.call(null,"WS Close:",evt.data);
} else
{return null;
}
});})(ws))
;
ws.onmessage = ((function (ws){
return (function (evt){var data = evt.data;var msg = cljs.reader.read_string.call(null,data);cljs.core.async.put_BANG_.call(null,testdrive.core.event_ch,msg);
if(cljs.core.truth_(testdrive.core.debug.call(null)))
{return cljs.core.println.call(null,"WS Event:",msg);
} else
{return null;
}
});})(ws))
;
ws.onerror = ((function (ws){
return (function (evt){return cljs.core.println.call(null,"WS Error:",evt.data);
});})(ws))
;
var c__6368__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6368__auto__,ws){
return (function (){var f__6369__auto__ = (function (){var switch__6353__auto__ = ((function (c__6368__auto__,ws){
return (function (state_10247){var state_val_10248 = (state_10247[(1)]);if((state_val_10248 === (7)))
{var inst_10228 = (state_10247[(7)]);var inst_10228__$1 = (state_10247[(2)]);var state_10247__$1 = (function (){var statearr_10249 = state_10247;(statearr_10249[(7)] = inst_10228__$1);
return statearr_10249;
})();if(cljs.core.truth_(inst_10228__$1))
{var statearr_10250_10273 = state_10247__$1;(statearr_10250_10273[(1)] = (8));
} else
{var statearr_10251_10274 = state_10247__$1;(statearr_10251_10274[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10248 === (1)))
{var state_10247__$1 = state_10247;var statearr_10252_10275 = state_10247__$1;(statearr_10252_10275[(2)] = null);
(statearr_10252_10275[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10248 === (4)))
{var state_10247__$1 = state_10247;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10247__$1,(7),testdrive.core.ws_send);
} else
{if((state_val_10248 === (13)))
{var inst_10236 = (state_10247[(2)]);var state_10247__$1 = state_10247;var statearr_10253_10276 = state_10247__$1;(statearr_10253_10276[(2)] = inst_10236);
(statearr_10253_10276[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10248 === (6)))
{var inst_10243 = (state_10247[(2)]);var state_10247__$1 = state_10247;var statearr_10254_10277 = state_10247__$1;(statearr_10254_10277[(2)] = inst_10243);
(statearr_10254_10277[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10248 === (3)))
{var inst_10245 = (state_10247[(2)]);var state_10247__$1 = state_10247;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10247__$1,inst_10245);
} else
{if((state_val_10248 === (12)))
{var state_10247__$1 = state_10247;var statearr_10255_10278 = state_10247__$1;(statearr_10255_10278[(2)] = null);
(statearr_10255_10278[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10248 === (2)))
{var state_10247__$1 = state_10247;if(cljs.core.truth_(ws))
{var statearr_10256_10279 = state_10247__$1;(statearr_10256_10279[(1)] = (4));
} else
{var statearr_10257_10280 = state_10247__$1;(statearr_10257_10280[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10248 === (11)))
{var inst_10228 = (state_10247[(7)]);var inst_10233 = cljs.core.println.call(null,"WS Send:",inst_10228);var state_10247__$1 = state_10247;var statearr_10258_10281 = state_10247__$1;(statearr_10258_10281[(2)] = inst_10233);
(statearr_10258_10281[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10248 === (9)))
{var state_10247__$1 = state_10247;var statearr_10259_10282 = state_10247__$1;(statearr_10259_10282[(2)] = null);
(statearr_10259_10282[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10248 === (5)))
{var state_10247__$1 = state_10247;var statearr_10260_10283 = state_10247__$1;(statearr_10260_10283[(2)] = null);
(statearr_10260_10283[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10248 === (10)))
{var inst_10239 = (state_10247[(2)]);var state_10247__$1 = (function (){var statearr_10261 = state_10247;(statearr_10261[(8)] = inst_10239);
return statearr_10261;
})();var statearr_10262_10284 = state_10247__$1;(statearr_10262_10284[(2)] = null);
(statearr_10262_10284[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10248 === (8)))
{var inst_10228 = (state_10247[(7)]);var inst_10230 = ws.send(inst_10228);var inst_10231 = testdrive.core.debug.call(null);var state_10247__$1 = (function (){var statearr_10263 = state_10247;(statearr_10263[(9)] = inst_10230);
return statearr_10263;
})();if(cljs.core.truth_(inst_10231))
{var statearr_10264_10285 = state_10247__$1;(statearr_10264_10285[(1)] = (11));
} else
{var statearr_10265_10286 = state_10247__$1;(statearr_10265_10286[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
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
});})(c__6368__auto__,ws))
;return ((function (switch__6353__auto__,c__6368__auto__,ws){
return (function() {
var state_machine__6354__auto__ = null;
var state_machine__6354__auto____0 = (function (){var statearr_10269 = [null,null,null,null,null,null,null,null,null,null];(statearr_10269[(0)] = state_machine__6354__auto__);
(statearr_10269[(1)] = (1));
return statearr_10269;
});
var state_machine__6354__auto____1 = (function (state_10247){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_10247);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e10270){if((e10270 instanceof Object))
{var ex__6357__auto__ = e10270;var statearr_10271_10287 = state_10247;(statearr_10271_10287[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10247);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10270;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10288 = state_10247;
state_10247 = G__10288;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_10247){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_10247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto__,ws))
})();var state__6370__auto__ = (function (){var statearr_10272 = f__6369__auto__.call(null);(statearr_10272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto__);
return statearr_10272;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6370__auto__);
});})(c__6368__auto__,ws))
);
return c__6368__auto__;
});
/**
* DOM ready initialisation of application
*/
testdrive.core.init = (function init(){om.core.root.call(null,testdrive.core.dashboard,testdrive.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(testdrive.core.config.call(null,new cljs.core.Keyword(null,"app-container-id","app-container-id",-899827362)))], null));
if(cljs.core.not.call(null,testdrive.core.config.call(null,new cljs.core.Keyword(null,"simulation","simulation",-1001480470))))
{return testdrive.core.init_websocket.call(null);
} else
{testdrive.core.simulate_events.call(null);
return cljs.core.println.call(null,"Simulation mode enabled. All data displayed is generated.");
}
});
window.onload = testdrive.core.init;
