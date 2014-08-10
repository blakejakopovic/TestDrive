// Compiled by ClojureScript 0.0-2307
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11614 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11614 = (function (f,fn_handler,meta11615){
this.f = f;
this.fn_handler = fn_handler;
this.meta11615 = meta11615;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11614.cljs$lang$type = true;
cljs.core.async.t11614.cljs$lang$ctorStr = "cljs.core.async/t11614";
cljs.core.async.t11614.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t11614");
});
cljs.core.async.t11614.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11614.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11614.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11616){var self__ = this;
var _11616__$1 = this;return self__.meta11615;
});
cljs.core.async.t11614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11616,meta11615__$1){var self__ = this;
var _11616__$1 = this;return (new cljs.core.async.t11614(self__.f,self__.fn_handler,meta11615__$1));
});
cljs.core.async.__GT_t11614 = (function __GT_t11614(f__$1,fn_handler__$1,meta11615){return (new cljs.core.async.t11614(f__$1,fn_handler__$1,meta11615));
});
}
return (new cljs.core.async.t11614(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11618 = buff;if(G__11618)
{var bit__4201__auto__ = null;if(cljs.core.truth_((function (){var or__3551__auto__ = bit__4201__auto__;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return G__11618.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11618.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11618);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11618);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11619 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11619);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11619,ret){
return (function (){return fn1.call(null,val_11619);
});})(val_11619,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4407__auto___11620 = n;var x_11621 = (0);while(true){
if((x_11621 < n__4407__auto___11620))
{(a[x_11621] = (0));
{
var G__11622 = (x_11621 + (1));
x_11621 = G__11622;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11623 = (i + (1));
i = G__11623;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11627 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11627 = (function (flag,alt_flag,meta11628){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11628 = meta11628;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11627.cljs$lang$type = true;
cljs.core.async.t11627.cljs$lang$ctorStr = "cljs.core.async/t11627";
cljs.core.async.t11627.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t11627");
});})(flag))
;
cljs.core.async.t11627.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11627.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11627.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11627.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11629){var self__ = this;
var _11629__$1 = this;return self__.meta11628;
});})(flag))
;
cljs.core.async.t11627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11629,meta11628__$1){var self__ = this;
var _11629__$1 = this;return (new cljs.core.async.t11627(self__.flag,self__.alt_flag,meta11628__$1));
});})(flag))
;
cljs.core.async.__GT_t11627 = ((function (flag){
return (function __GT_t11627(flag__$1,alt_flag__$1,meta11628){return (new cljs.core.async.t11627(flag__$1,alt_flag__$1,meta11628));
});})(flag))
;
}
return (new cljs.core.async.t11627(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11633 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11633 = (function (cb,flag,alt_handler,meta11634){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11634 = meta11634;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11633.cljs$lang$type = true;
cljs.core.async.t11633.cljs$lang$ctorStr = "cljs.core.async/t11633";
cljs.core.async.t11633.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t11633");
});
cljs.core.async.t11633.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11633.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11633.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11633.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11635){var self__ = this;
var _11635__$1 = this;return self__.meta11634;
});
cljs.core.async.t11633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11635,meta11634__$1){var self__ = this;
var _11635__$1 = this;return (new cljs.core.async.t11633(self__.cb,self__.flag,self__.alt_handler,meta11634__$1));
});
cljs.core.async.__GT_t11633 = (function __GT_t11633(cb__$1,flag__$1,alt_handler__$1,meta11634){return (new cljs.core.async.t11633(cb__$1,flag__$1,alt_handler__$1,meta11634));
});
}
return (new cljs.core.async.t11633(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11636_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11636_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11637_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11637_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3551__auto__ = wport;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11638 = (i + (1));
i = G__11638;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3551__auto__ = ret;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3539__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3539__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3539__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11639){var map__11641 = p__11639;var map__11641__$1 = ((cljs.core.seq_QMARK_.call(null,map__11641))?cljs.core.apply.call(null,cljs.core.hash_map,map__11641):map__11641);var opts = map__11641__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__11639 = null;if (arguments.length > 1) {
  p__11639 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11639);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11642){
var ports = cljs.core.first(arglist__11642);
var p__11639 = cljs.core.rest(arglist__11642);
return alts_BANG___delegate(ports,p__11639);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11650 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11650 = (function (ch,f,map_LT_,meta11651){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11651 = meta11651;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11650.cljs$lang$type = true;
cljs.core.async.t11650.cljs$lang$ctorStr = "cljs.core.async/t11650";
cljs.core.async.t11650.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t11650");
});
cljs.core.async.t11650.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11650.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t11650.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11650.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11653 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11653 = (function (fn1,_,meta11651,ch,f,map_LT_,meta11654){
this.fn1 = fn1;
this._ = _;
this.meta11651 = meta11651;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11654 = meta11654;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11653.cljs$lang$type = true;
cljs.core.async.t11653.cljs$lang$ctorStr = "cljs.core.async/t11653";
cljs.core.async.t11653.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t11653");
});})(___$1))
;
cljs.core.async.t11653.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11653.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11653.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11653.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__11643_SHARP_){return f1.call(null,(((p1__11643_SHARP_ == null))?null:self__.f.call(null,p1__11643_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t11653.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11655){var self__ = this;
var _11655__$1 = this;return self__.meta11654;
});})(___$1))
;
cljs.core.async.t11653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11655,meta11654__$1){var self__ = this;
var _11655__$1 = this;return (new cljs.core.async.t11653(self__.fn1,self__._,self__.meta11651,self__.ch,self__.f,self__.map_LT_,meta11654__$1));
});})(___$1))
;
cljs.core.async.__GT_t11653 = ((function (___$1){
return (function __GT_t11653(fn1__$1,___$2,meta11651__$1,ch__$2,f__$2,map_LT___$2,meta11654){return (new cljs.core.async.t11653(fn1__$1,___$2,meta11651__$1,ch__$2,f__$2,map_LT___$2,meta11654));
});})(___$1))
;
}
return (new cljs.core.async.t11653(fn1,___$1,self__.meta11651,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3539__auto__ = ret;if(cljs.core.truth_(and__3539__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3539__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11650.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11650.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11650.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11652){var self__ = this;
var _11652__$1 = this;return self__.meta11651;
});
cljs.core.async.t11650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11652,meta11651__$1){var self__ = this;
var _11652__$1 = this;return (new cljs.core.async.t11650(self__.ch,self__.f,self__.map_LT_,meta11651__$1));
});
cljs.core.async.__GT_t11650 = (function __GT_t11650(ch__$1,f__$1,map_LT___$1,meta11651){return (new cljs.core.async.t11650(ch__$1,f__$1,map_LT___$1,meta11651));
});
}
return (new cljs.core.async.t11650(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11659 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11659 = (function (ch,f,map_GT_,meta11660){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11660 = meta11660;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11659.cljs$lang$type = true;
cljs.core.async.t11659.cljs$lang$ctorStr = "cljs.core.async/t11659";
cljs.core.async.t11659.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t11659");
});
cljs.core.async.t11659.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11659.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t11659.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11659.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11659.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11659.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11661){var self__ = this;
var _11661__$1 = this;return self__.meta11660;
});
cljs.core.async.t11659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11661,meta11660__$1){var self__ = this;
var _11661__$1 = this;return (new cljs.core.async.t11659(self__.ch,self__.f,self__.map_GT_,meta11660__$1));
});
cljs.core.async.__GT_t11659 = (function __GT_t11659(ch__$1,f__$1,map_GT___$1,meta11660){return (new cljs.core.async.t11659(ch__$1,f__$1,map_GT___$1,meta11660));
});
}
return (new cljs.core.async.t11659(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11665 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11665 = (function (ch,p,filter_GT_,meta11666){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11666 = meta11666;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11665.cljs$lang$type = true;
cljs.core.async.t11665.cljs$lang$ctorStr = "cljs.core.async/t11665";
cljs.core.async.t11665.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t11665");
});
cljs.core.async.t11665.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11665.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t11665.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11665.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11665.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11665.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11665.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11667){var self__ = this;
var _11667__$1 = this;return self__.meta11666;
});
cljs.core.async.t11665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11667,meta11666__$1){var self__ = this;
var _11667__$1 = this;return (new cljs.core.async.t11665(self__.ch,self__.p,self__.filter_GT_,meta11666__$1));
});
cljs.core.async.__GT_t11665 = (function __GT_t11665(ch__$1,p__$1,filter_GT___$1,meta11666){return (new cljs.core.async.t11665(ch__$1,p__$1,filter_GT___$1,meta11666));
});
}
return (new cljs.core.async.t11665(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6368__auto___11750 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6368__auto___11750,out){
return (function (){var f__6369__auto__ = (function (){var switch__6353__auto__ = ((function (c__6368__auto___11750,out){
return (function (state_11729){var state_val_11730 = (state_11729[(1)]);if((state_val_11730 === (7)))
{var inst_11725 = (state_11729[(2)]);var state_11729__$1 = state_11729;var statearr_11731_11751 = state_11729__$1;(statearr_11731_11751[(2)] = inst_11725);
(statearr_11731_11751[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11730 === (1)))
{var state_11729__$1 = state_11729;var statearr_11732_11752 = state_11729__$1;(statearr_11732_11752[(2)] = null);
(statearr_11732_11752[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11730 === (4)))
{var inst_11711 = (state_11729[(7)]);var inst_11711__$1 = (state_11729[(2)]);var inst_11712 = (inst_11711__$1 == null);var state_11729__$1 = (function (){var statearr_11733 = state_11729;(statearr_11733[(7)] = inst_11711__$1);
return statearr_11733;
})();if(cljs.core.truth_(inst_11712))
{var statearr_11734_11753 = state_11729__$1;(statearr_11734_11753[(1)] = (5));
} else
{var statearr_11735_11754 = state_11729__$1;(statearr_11735_11754[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11730 === (6)))
{var inst_11711 = (state_11729[(7)]);var inst_11716 = p.call(null,inst_11711);var state_11729__$1 = state_11729;if(cljs.core.truth_(inst_11716))
{var statearr_11736_11755 = state_11729__$1;(statearr_11736_11755[(1)] = (8));
} else
{var statearr_11737_11756 = state_11729__$1;(statearr_11737_11756[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11730 === (3)))
{var inst_11727 = (state_11729[(2)]);var state_11729__$1 = state_11729;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11729__$1,inst_11727);
} else
{if((state_val_11730 === (2)))
{var state_11729__$1 = state_11729;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11729__$1,(4),ch);
} else
{if((state_val_11730 === (11)))
{var inst_11719 = (state_11729[(2)]);var state_11729__$1 = state_11729;var statearr_11738_11757 = state_11729__$1;(statearr_11738_11757[(2)] = inst_11719);
(statearr_11738_11757[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11730 === (9)))
{var state_11729__$1 = state_11729;var statearr_11739_11758 = state_11729__$1;(statearr_11739_11758[(2)] = null);
(statearr_11739_11758[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11730 === (5)))
{var inst_11714 = cljs.core.async.close_BANG_.call(null,out);var state_11729__$1 = state_11729;var statearr_11740_11759 = state_11729__$1;(statearr_11740_11759[(2)] = inst_11714);
(statearr_11740_11759[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11730 === (10)))
{var inst_11722 = (state_11729[(2)]);var state_11729__$1 = (function (){var statearr_11741 = state_11729;(statearr_11741[(8)] = inst_11722);
return statearr_11741;
})();var statearr_11742_11760 = state_11729__$1;(statearr_11742_11760[(2)] = null);
(statearr_11742_11760[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11730 === (8)))
{var inst_11711 = (state_11729[(7)]);var state_11729__$1 = state_11729;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11729__$1,(11),out,inst_11711);
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
});})(c__6368__auto___11750,out))
;return ((function (switch__6353__auto__,c__6368__auto___11750,out){
return (function() {
var state_machine__6354__auto__ = null;
var state_machine__6354__auto____0 = (function (){var statearr_11746 = [null,null,null,null,null,null,null,null,null];(statearr_11746[(0)] = state_machine__6354__auto__);
(statearr_11746[(1)] = (1));
return statearr_11746;
});
var state_machine__6354__auto____1 = (function (state_11729){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_11729);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e11747){if((e11747 instanceof Object))
{var ex__6357__auto__ = e11747;var statearr_11748_11761 = state_11729;(statearr_11748_11761[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11729);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11747;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11762 = state_11729;
state_11729 = G__11762;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_11729){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_11729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto___11750,out))
})();var state__6370__auto__ = (function (){var statearr_11749 = f__6369__auto__.call(null);(statearr_11749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto___11750);
return statearr_11749;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6370__auto__);
});})(c__6368__auto___11750,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6368__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6368__auto__){
return (function (){var f__6369__auto__ = (function (){var switch__6353__auto__ = ((function (c__6368__auto__){
return (function (state_11928){var state_val_11929 = (state_11928[(1)]);if((state_val_11929 === (7)))
{var inst_11924 = (state_11928[(2)]);var state_11928__$1 = state_11928;var statearr_11930_11971 = state_11928__$1;(statearr_11930_11971[(2)] = inst_11924);
(statearr_11930_11971[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11929 === (20)))
{var inst_11894 = (state_11928[(7)]);var inst_11905 = (state_11928[(2)]);var inst_11906 = cljs.core.next.call(null,inst_11894);var inst_11880 = inst_11906;var inst_11881 = null;var inst_11882 = (0);var inst_11883 = (0);var state_11928__$1 = (function (){var statearr_11931 = state_11928;(statearr_11931[(8)] = inst_11882);
(statearr_11931[(9)] = inst_11881);
(statearr_11931[(10)] = inst_11883);
(statearr_11931[(11)] = inst_11880);
(statearr_11931[(12)] = inst_11905);
return statearr_11931;
})();var statearr_11932_11972 = state_11928__$1;(statearr_11932_11972[(2)] = null);
(statearr_11932_11972[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11929 === (1)))
{var state_11928__$1 = state_11928;var statearr_11933_11973 = state_11928__$1;(statearr_11933_11973[(2)] = null);
(statearr_11933_11973[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11929 === (4)))
{var inst_11869 = (state_11928[(13)]);var inst_11869__$1 = (state_11928[(2)]);var inst_11870 = (inst_11869__$1 == null);var state_11928__$1 = (function (){var statearr_11934 = state_11928;(statearr_11934[(13)] = inst_11869__$1);
return statearr_11934;
})();if(cljs.core.truth_(inst_11870))
{var statearr_11935_11974 = state_11928__$1;(statearr_11935_11974[(1)] = (5));
} else
{var statearr_11936_11975 = state_11928__$1;(statearr_11936_11975[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11929 === (15)))
{var state_11928__$1 = state_11928;var statearr_11940_11976 = state_11928__$1;(statearr_11940_11976[(2)] = null);
(statearr_11940_11976[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11929 === (21)))
{var state_11928__$1 = state_11928;var statearr_11941_11977 = state_11928__$1;(statearr_11941_11977[(2)] = null);
(statearr_11941_11977[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11929 === (13)))
{var inst_11882 = (state_11928[(8)]);var inst_11881 = (state_11928[(9)]);var inst_11883 = (state_11928[(10)]);var inst_11880 = (state_11928[(11)]);var inst_11890 = (state_11928[(2)]);var inst_11891 = (inst_11883 + (1));var tmp11937 = inst_11882;var tmp11938 = inst_11881;var tmp11939 = inst_11880;var inst_11880__$1 = tmp11939;var inst_11881__$1 = tmp11938;var inst_11882__$1 = tmp11937;var inst_11883__$1 = inst_11891;var state_11928__$1 = (function (){var statearr_11942 = state_11928;(statearr_11942[(8)] = inst_11882__$1);
(statearr_11942[(14)] = inst_11890);
(statearr_11942[(9)] = inst_11881__$1);
(statearr_11942[(10)] = inst_11883__$1);
(statearr_11942[(11)] = inst_11880__$1);
return statearr_11942;
})();var statearr_11943_11978 = state_11928__$1;(statearr_11943_11978[(2)] = null);
(statearr_11943_11978[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11929 === (22)))
{var state_11928__$1 = state_11928;var statearr_11944_11979 = state_11928__$1;(statearr_11944_11979[(2)] = null);
(statearr_11944_11979[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11929 === (6)))
{var inst_11869 = (state_11928[(13)]);var inst_11878 = f.call(null,inst_11869);var inst_11879 = cljs.core.seq.call(null,inst_11878);var inst_11880 = inst_11879;var inst_11881 = null;var inst_11882 = (0);var inst_11883 = (0);var state_11928__$1 = (function (){var statearr_11945 = state_11928;(statearr_11945[(8)] = inst_11882);
(statearr_11945[(9)] = inst_11881);
(statearr_11945[(10)] = inst_11883);
(statearr_11945[(11)] = inst_11880);
return statearr_11945;
})();var statearr_11946_11980 = state_11928__$1;(statearr_11946_11980[(2)] = null);
(statearr_11946_11980[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11929 === (17)))
{var inst_11894 = (state_11928[(7)]);var inst_11898 = cljs.core.chunk_first.call(null,inst_11894);var inst_11899 = cljs.core.chunk_rest.call(null,inst_11894);var inst_11900 = cljs.core.count.call(null,inst_11898);var inst_11880 = inst_11899;var inst_11881 = inst_11898;var inst_11882 = inst_11900;var inst_11883 = (0);var state_11928__$1 = (function (){var statearr_11947 = state_11928;(statearr_11947[(8)] = inst_11882);
(statearr_11947[(9)] = inst_11881);
(statearr_11947[(10)] = inst_11883);
(statearr_11947[(11)] = inst_11880);
return statearr_11947;
})();var statearr_11948_11981 = state_11928__$1;(statearr_11948_11981[(2)] = null);
(statearr_11948_11981[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11929 === (3)))
{var inst_11926 = (state_11928[(2)]);var state_11928__$1 = state_11928;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11928__$1,inst_11926);
} else
{if((state_val_11929 === (12)))
{var inst_11914 = (state_11928[(2)]);var state_11928__$1 = state_11928;var statearr_11949_11982 = state_11928__$1;(statearr_11949_11982[(2)] = inst_11914);
(statearr_11949_11982[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11929 === (2)))
{var state_11928__$1 = state_11928;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11928__$1,(4),in$);
} else
{if((state_val_11929 === (23)))
{var inst_11922 = (state_11928[(2)]);var state_11928__$1 = state_11928;var statearr_11950_11983 = state_11928__$1;(statearr_11950_11983[(2)] = inst_11922);
(statearr_11950_11983[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11929 === (19)))
{var inst_11909 = (state_11928[(2)]);var state_11928__$1 = state_11928;var statearr_11951_11984 = state_11928__$1;(statearr_11951_11984[(2)] = inst_11909);
(statearr_11951_11984[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11929 === (11)))
{var inst_11880 = (state_11928[(11)]);var inst_11894 = (state_11928[(7)]);var inst_11894__$1 = cljs.core.seq.call(null,inst_11880);var state_11928__$1 = (function (){var statearr_11952 = state_11928;(statearr_11952[(7)] = inst_11894__$1);
return statearr_11952;
})();if(inst_11894__$1)
{var statearr_11953_11985 = state_11928__$1;(statearr_11953_11985[(1)] = (14));
} else
{var statearr_11954_11986 = state_11928__$1;(statearr_11954_11986[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11929 === (9)))
{var inst_11916 = (state_11928[(2)]);var inst_11917 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_11928__$1 = (function (){var statearr_11955 = state_11928;(statearr_11955[(15)] = inst_11916);
return statearr_11955;
})();if(cljs.core.truth_(inst_11917))
{var statearr_11956_11987 = state_11928__$1;(statearr_11956_11987[(1)] = (21));
} else
{var statearr_11957_11988 = state_11928__$1;(statearr_11957_11988[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11929 === (5)))
{var inst_11872 = cljs.core.async.close_BANG_.call(null,out);var state_11928__$1 = state_11928;var statearr_11958_11989 = state_11928__$1;(statearr_11958_11989[(2)] = inst_11872);
(statearr_11958_11989[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11929 === (14)))
{var inst_11894 = (state_11928[(7)]);var inst_11896 = cljs.core.chunked_seq_QMARK_.call(null,inst_11894);var state_11928__$1 = state_11928;if(inst_11896)
{var statearr_11959_11990 = state_11928__$1;(statearr_11959_11990[(1)] = (17));
} else
{var statearr_11960_11991 = state_11928__$1;(statearr_11960_11991[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11929 === (16)))
{var inst_11912 = (state_11928[(2)]);var state_11928__$1 = state_11928;var statearr_11961_11992 = state_11928__$1;(statearr_11961_11992[(2)] = inst_11912);
(statearr_11961_11992[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11929 === (10)))
{var inst_11881 = (state_11928[(9)]);var inst_11883 = (state_11928[(10)]);var inst_11888 = cljs.core._nth.call(null,inst_11881,inst_11883);var state_11928__$1 = state_11928;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11928__$1,(13),out,inst_11888);
} else
{if((state_val_11929 === (18)))
{var inst_11894 = (state_11928[(7)]);var inst_11903 = cljs.core.first.call(null,inst_11894);var state_11928__$1 = state_11928;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11928__$1,(20),out,inst_11903);
} else
{if((state_val_11929 === (8)))
{var inst_11882 = (state_11928[(8)]);var inst_11883 = (state_11928[(10)]);var inst_11885 = (inst_11883 < inst_11882);var inst_11886 = inst_11885;var state_11928__$1 = state_11928;if(cljs.core.truth_(inst_11886))
{var statearr_11962_11993 = state_11928__$1;(statearr_11962_11993[(1)] = (10));
} else
{var statearr_11963_11994 = state_11928__$1;(statearr_11963_11994[(1)] = (11));
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
}
}
}
}
});})(c__6368__auto__))
;return ((function (switch__6353__auto__,c__6368__auto__){
return (function() {
var state_machine__6354__auto__ = null;
var state_machine__6354__auto____0 = (function (){var statearr_11967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11967[(0)] = state_machine__6354__auto__);
(statearr_11967[(1)] = (1));
return statearr_11967;
});
var state_machine__6354__auto____1 = (function (state_11928){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_11928);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e11968){if((e11968 instanceof Object))
{var ex__6357__auto__ = e11968;var statearr_11969_11995 = state_11928;(statearr_11969_11995[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11928);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11968;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11996 = state_11928;
state_11928 = G__11996;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_11928){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_11928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto__))
})();var state__6370__auto__ = (function (){var statearr_11970 = f__6369__auto__.call(null);(statearr_11970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto__);
return statearr_11970;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6370__auto__);
});})(c__6368__auto__))
);
return c__6368__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6368__auto___12091 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6368__auto___12091){
return (function (){var f__6369__auto__ = (function (){var switch__6353__auto__ = ((function (c__6368__auto___12091){
return (function (state_12067){var state_val_12068 = (state_12067[(1)]);if((state_val_12068 === (7)))
{var inst_12063 = (state_12067[(2)]);var state_12067__$1 = state_12067;var statearr_12069_12092 = state_12067__$1;(statearr_12069_12092[(2)] = inst_12063);
(statearr_12069_12092[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12068 === (1)))
{var state_12067__$1 = state_12067;var statearr_12070_12093 = state_12067__$1;(statearr_12070_12093[(2)] = null);
(statearr_12070_12093[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12068 === (4)))
{var inst_12046 = (state_12067[(7)]);var inst_12046__$1 = (state_12067[(2)]);var inst_12047 = (inst_12046__$1 == null);var state_12067__$1 = (function (){var statearr_12071 = state_12067;(statearr_12071[(7)] = inst_12046__$1);
return statearr_12071;
})();if(cljs.core.truth_(inst_12047))
{var statearr_12072_12094 = state_12067__$1;(statearr_12072_12094[(1)] = (5));
} else
{var statearr_12073_12095 = state_12067__$1;(statearr_12073_12095[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12068 === (13)))
{var state_12067__$1 = state_12067;var statearr_12074_12096 = state_12067__$1;(statearr_12074_12096[(2)] = null);
(statearr_12074_12096[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12068 === (6)))
{var inst_12046 = (state_12067[(7)]);var state_12067__$1 = state_12067;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12067__$1,(11),to,inst_12046);
} else
{if((state_val_12068 === (3)))
{var inst_12065 = (state_12067[(2)]);var state_12067__$1 = state_12067;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12067__$1,inst_12065);
} else
{if((state_val_12068 === (12)))
{var state_12067__$1 = state_12067;var statearr_12075_12097 = state_12067__$1;(statearr_12075_12097[(2)] = null);
(statearr_12075_12097[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12068 === (2)))
{var state_12067__$1 = state_12067;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12067__$1,(4),from);
} else
{if((state_val_12068 === (11)))
{var inst_12056 = (state_12067[(2)]);var state_12067__$1 = state_12067;if(cljs.core.truth_(inst_12056))
{var statearr_12076_12098 = state_12067__$1;(statearr_12076_12098[(1)] = (12));
} else
{var statearr_12077_12099 = state_12067__$1;(statearr_12077_12099[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12068 === (9)))
{var state_12067__$1 = state_12067;var statearr_12078_12100 = state_12067__$1;(statearr_12078_12100[(2)] = null);
(statearr_12078_12100[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12068 === (5)))
{var state_12067__$1 = state_12067;if(cljs.core.truth_(close_QMARK_))
{var statearr_12079_12101 = state_12067__$1;(statearr_12079_12101[(1)] = (8));
} else
{var statearr_12080_12102 = state_12067__$1;(statearr_12080_12102[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12068 === (14)))
{var inst_12061 = (state_12067[(2)]);var state_12067__$1 = state_12067;var statearr_12081_12103 = state_12067__$1;(statearr_12081_12103[(2)] = inst_12061);
(statearr_12081_12103[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12068 === (10)))
{var inst_12053 = (state_12067[(2)]);var state_12067__$1 = state_12067;var statearr_12082_12104 = state_12067__$1;(statearr_12082_12104[(2)] = inst_12053);
(statearr_12082_12104[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12068 === (8)))
{var inst_12050 = cljs.core.async.close_BANG_.call(null,to);var state_12067__$1 = state_12067;var statearr_12083_12105 = state_12067__$1;(statearr_12083_12105[(2)] = inst_12050);
(statearr_12083_12105[(1)] = (10));
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
});})(c__6368__auto___12091))
;return ((function (switch__6353__auto__,c__6368__auto___12091){
return (function() {
var state_machine__6354__auto__ = null;
var state_machine__6354__auto____0 = (function (){var statearr_12087 = [null,null,null,null,null,null,null,null];(statearr_12087[(0)] = state_machine__6354__auto__);
(statearr_12087[(1)] = (1));
return statearr_12087;
});
var state_machine__6354__auto____1 = (function (state_12067){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_12067);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e12088){if((e12088 instanceof Object))
{var ex__6357__auto__ = e12088;var statearr_12089_12106 = state_12067;(statearr_12089_12106[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12067);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12088;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12107 = state_12067;
state_12067 = G__12107;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_12067){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_12067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto___12091))
})();var state__6370__auto__ = (function (){var statearr_12090 = f__6369__auto__.call(null);(statearr_12090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto___12091);
return statearr_12090;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6370__auto__);
});})(c__6368__auto___12091))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6368__auto___12208 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6368__auto___12208,tc,fc){
return (function (){var f__6369__auto__ = (function (){var switch__6353__auto__ = ((function (c__6368__auto___12208,tc,fc){
return (function (state_12183){var state_val_12184 = (state_12183[(1)]);if((state_val_12184 === (7)))
{var inst_12179 = (state_12183[(2)]);var state_12183__$1 = state_12183;var statearr_12185_12209 = state_12183__$1;(statearr_12185_12209[(2)] = inst_12179);
(statearr_12185_12209[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12184 === (1)))
{var state_12183__$1 = state_12183;var statearr_12186_12210 = state_12183__$1;(statearr_12186_12210[(2)] = null);
(statearr_12186_12210[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12184 === (4)))
{var inst_12160 = (state_12183[(7)]);var inst_12160__$1 = (state_12183[(2)]);var inst_12161 = (inst_12160__$1 == null);var state_12183__$1 = (function (){var statearr_12187 = state_12183;(statearr_12187[(7)] = inst_12160__$1);
return statearr_12187;
})();if(cljs.core.truth_(inst_12161))
{var statearr_12188_12211 = state_12183__$1;(statearr_12188_12211[(1)] = (5));
} else
{var statearr_12189_12212 = state_12183__$1;(statearr_12189_12212[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12184 === (13)))
{var state_12183__$1 = state_12183;var statearr_12190_12213 = state_12183__$1;(statearr_12190_12213[(2)] = null);
(statearr_12190_12213[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12184 === (6)))
{var inst_12160 = (state_12183[(7)]);var inst_12166 = p.call(null,inst_12160);var state_12183__$1 = state_12183;if(cljs.core.truth_(inst_12166))
{var statearr_12191_12214 = state_12183__$1;(statearr_12191_12214[(1)] = (9));
} else
{var statearr_12192_12215 = state_12183__$1;(statearr_12192_12215[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12184 === (3)))
{var inst_12181 = (state_12183[(2)]);var state_12183__$1 = state_12183;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12183__$1,inst_12181);
} else
{if((state_val_12184 === (12)))
{var state_12183__$1 = state_12183;var statearr_12193_12216 = state_12183__$1;(statearr_12193_12216[(2)] = null);
(statearr_12193_12216[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12184 === (2)))
{var state_12183__$1 = state_12183;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12183__$1,(4),ch);
} else
{if((state_val_12184 === (11)))
{var inst_12160 = (state_12183[(7)]);var inst_12170 = (state_12183[(2)]);var state_12183__$1 = state_12183;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12183__$1,(8),inst_12170,inst_12160);
} else
{if((state_val_12184 === (9)))
{var state_12183__$1 = state_12183;var statearr_12194_12217 = state_12183__$1;(statearr_12194_12217[(2)] = tc);
(statearr_12194_12217[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12184 === (5)))
{var inst_12163 = cljs.core.async.close_BANG_.call(null,tc);var inst_12164 = cljs.core.async.close_BANG_.call(null,fc);var state_12183__$1 = (function (){var statearr_12195 = state_12183;(statearr_12195[(8)] = inst_12163);
return statearr_12195;
})();var statearr_12196_12218 = state_12183__$1;(statearr_12196_12218[(2)] = inst_12164);
(statearr_12196_12218[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12184 === (14)))
{var inst_12177 = (state_12183[(2)]);var state_12183__$1 = state_12183;var statearr_12197_12219 = state_12183__$1;(statearr_12197_12219[(2)] = inst_12177);
(statearr_12197_12219[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12184 === (10)))
{var state_12183__$1 = state_12183;var statearr_12198_12220 = state_12183__$1;(statearr_12198_12220[(2)] = fc);
(statearr_12198_12220[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12184 === (8)))
{var inst_12172 = (state_12183[(2)]);var state_12183__$1 = state_12183;if(cljs.core.truth_(inst_12172))
{var statearr_12199_12221 = state_12183__$1;(statearr_12199_12221[(1)] = (12));
} else
{var statearr_12200_12222 = state_12183__$1;(statearr_12200_12222[(1)] = (13));
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
});})(c__6368__auto___12208,tc,fc))
;return ((function (switch__6353__auto__,c__6368__auto___12208,tc,fc){
return (function() {
var state_machine__6354__auto__ = null;
var state_machine__6354__auto____0 = (function (){var statearr_12204 = [null,null,null,null,null,null,null,null,null];(statearr_12204[(0)] = state_machine__6354__auto__);
(statearr_12204[(1)] = (1));
return statearr_12204;
});
var state_machine__6354__auto____1 = (function (state_12183){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_12183);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e12205){if((e12205 instanceof Object))
{var ex__6357__auto__ = e12205;var statearr_12206_12223 = state_12183;(statearr_12206_12223[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12183);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12205;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12224 = state_12183;
state_12183 = G__12224;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_12183){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_12183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto___12208,tc,fc))
})();var state__6370__auto__ = (function (){var statearr_12207 = f__6369__auto__.call(null);(statearr_12207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto___12208);
return statearr_12207;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6370__auto__);
});})(c__6368__auto___12208,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6368__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6368__auto__){
return (function (){var f__6369__auto__ = (function (){var switch__6353__auto__ = ((function (c__6368__auto__){
return (function (state_12271){var state_val_12272 = (state_12271[(1)]);if((state_val_12272 === (7)))
{var inst_12267 = (state_12271[(2)]);var state_12271__$1 = state_12271;var statearr_12273_12289 = state_12271__$1;(statearr_12273_12289[(2)] = inst_12267);
(statearr_12273_12289[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12272 === (6)))
{var inst_12257 = (state_12271[(7)]);var inst_12260 = (state_12271[(8)]);var inst_12264 = f.call(null,inst_12257,inst_12260);var inst_12257__$1 = inst_12264;var state_12271__$1 = (function (){var statearr_12274 = state_12271;(statearr_12274[(7)] = inst_12257__$1);
return statearr_12274;
})();var statearr_12275_12290 = state_12271__$1;(statearr_12275_12290[(2)] = null);
(statearr_12275_12290[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12272 === (5)))
{var inst_12257 = (state_12271[(7)]);var state_12271__$1 = state_12271;var statearr_12276_12291 = state_12271__$1;(statearr_12276_12291[(2)] = inst_12257);
(statearr_12276_12291[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12272 === (4)))
{var inst_12260 = (state_12271[(8)]);var inst_12260__$1 = (state_12271[(2)]);var inst_12261 = (inst_12260__$1 == null);var state_12271__$1 = (function (){var statearr_12277 = state_12271;(statearr_12277[(8)] = inst_12260__$1);
return statearr_12277;
})();if(cljs.core.truth_(inst_12261))
{var statearr_12278_12292 = state_12271__$1;(statearr_12278_12292[(1)] = (5));
} else
{var statearr_12279_12293 = state_12271__$1;(statearr_12279_12293[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12272 === (3)))
{var inst_12269 = (state_12271[(2)]);var state_12271__$1 = state_12271;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12271__$1,inst_12269);
} else
{if((state_val_12272 === (2)))
{var state_12271__$1 = state_12271;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12271__$1,(4),ch);
} else
{if((state_val_12272 === (1)))
{var inst_12257 = init;var state_12271__$1 = (function (){var statearr_12280 = state_12271;(statearr_12280[(7)] = inst_12257);
return statearr_12280;
})();var statearr_12281_12294 = state_12271__$1;(statearr_12281_12294[(2)] = null);
(statearr_12281_12294[(1)] = (2));
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
});})(c__6368__auto__))
;return ((function (switch__6353__auto__,c__6368__auto__){
return (function() {
var state_machine__6354__auto__ = null;
var state_machine__6354__auto____0 = (function (){var statearr_12285 = [null,null,null,null,null,null,null,null,null];(statearr_12285[(0)] = state_machine__6354__auto__);
(statearr_12285[(1)] = (1));
return statearr_12285;
});
var state_machine__6354__auto____1 = (function (state_12271){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_12271);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e12286){if((e12286 instanceof Object))
{var ex__6357__auto__ = e12286;var statearr_12287_12295 = state_12271;(statearr_12287_12295[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12271);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12286;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12296 = state_12271;
state_12271 = G__12296;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_12271){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_12271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto__))
})();var state__6370__auto__ = (function (){var statearr_12288 = f__6369__auto__.call(null);(statearr_12288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto__);
return statearr_12288;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6370__auto__);
});})(c__6368__auto__))
);
return c__6368__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6368__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6368__auto__){
return (function (){var f__6369__auto__ = (function (){var switch__6353__auto__ = ((function (c__6368__auto__){
return (function (state_12370){var state_val_12371 = (state_12370[(1)]);if((state_val_12371 === (7)))
{var inst_12352 = (state_12370[(2)]);var state_12370__$1 = state_12370;var statearr_12372_12395 = state_12370__$1;(statearr_12372_12395[(2)] = inst_12352);
(statearr_12372_12395[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12371 === (1)))
{var inst_12346 = cljs.core.seq.call(null,coll);var inst_12347 = inst_12346;var state_12370__$1 = (function (){var statearr_12373 = state_12370;(statearr_12373[(7)] = inst_12347);
return statearr_12373;
})();var statearr_12374_12396 = state_12370__$1;(statearr_12374_12396[(2)] = null);
(statearr_12374_12396[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12371 === (4)))
{var inst_12347 = (state_12370[(7)]);var inst_12350 = cljs.core.first.call(null,inst_12347);var state_12370__$1 = state_12370;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12370__$1,(7),ch,inst_12350);
} else
{if((state_val_12371 === (13)))
{var inst_12364 = (state_12370[(2)]);var state_12370__$1 = state_12370;var statearr_12375_12397 = state_12370__$1;(statearr_12375_12397[(2)] = inst_12364);
(statearr_12375_12397[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12371 === (6)))
{var inst_12355 = (state_12370[(2)]);var state_12370__$1 = state_12370;if(cljs.core.truth_(inst_12355))
{var statearr_12376_12398 = state_12370__$1;(statearr_12376_12398[(1)] = (8));
} else
{var statearr_12377_12399 = state_12370__$1;(statearr_12377_12399[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12371 === (3)))
{var inst_12368 = (state_12370[(2)]);var state_12370__$1 = state_12370;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12370__$1,inst_12368);
} else
{if((state_val_12371 === (12)))
{var state_12370__$1 = state_12370;var statearr_12378_12400 = state_12370__$1;(statearr_12378_12400[(2)] = null);
(statearr_12378_12400[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12371 === (2)))
{var inst_12347 = (state_12370[(7)]);var state_12370__$1 = state_12370;if(cljs.core.truth_(inst_12347))
{var statearr_12379_12401 = state_12370__$1;(statearr_12379_12401[(1)] = (4));
} else
{var statearr_12380_12402 = state_12370__$1;(statearr_12380_12402[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12371 === (11)))
{var inst_12361 = cljs.core.async.close_BANG_.call(null,ch);var state_12370__$1 = state_12370;var statearr_12381_12403 = state_12370__$1;(statearr_12381_12403[(2)] = inst_12361);
(statearr_12381_12403[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12371 === (9)))
{var state_12370__$1 = state_12370;if(cljs.core.truth_(close_QMARK_))
{var statearr_12382_12404 = state_12370__$1;(statearr_12382_12404[(1)] = (11));
} else
{var statearr_12383_12405 = state_12370__$1;(statearr_12383_12405[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12371 === (5)))
{var inst_12347 = (state_12370[(7)]);var state_12370__$1 = state_12370;var statearr_12384_12406 = state_12370__$1;(statearr_12384_12406[(2)] = inst_12347);
(statearr_12384_12406[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12371 === (10)))
{var inst_12366 = (state_12370[(2)]);var state_12370__$1 = state_12370;var statearr_12385_12407 = state_12370__$1;(statearr_12385_12407[(2)] = inst_12366);
(statearr_12385_12407[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12371 === (8)))
{var inst_12347 = (state_12370[(7)]);var inst_12357 = cljs.core.next.call(null,inst_12347);var inst_12347__$1 = inst_12357;var state_12370__$1 = (function (){var statearr_12386 = state_12370;(statearr_12386[(7)] = inst_12347__$1);
return statearr_12386;
})();var statearr_12387_12408 = state_12370__$1;(statearr_12387_12408[(2)] = null);
(statearr_12387_12408[(1)] = (2));
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
});})(c__6368__auto__))
;return ((function (switch__6353__auto__,c__6368__auto__){
return (function() {
var state_machine__6354__auto__ = null;
var state_machine__6354__auto____0 = (function (){var statearr_12391 = [null,null,null,null,null,null,null,null];(statearr_12391[(0)] = state_machine__6354__auto__);
(statearr_12391[(1)] = (1));
return statearr_12391;
});
var state_machine__6354__auto____1 = (function (state_12370){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_12370);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e12392){if((e12392 instanceof Object))
{var ex__6357__auto__ = e12392;var statearr_12393_12409 = state_12370;(statearr_12393_12409[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12370);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12392;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12410 = state_12370;
state_12370 = G__12410;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_12370){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_12370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto__))
})();var state__6370__auto__ = (function (){var statearr_12394 = f__6369__auto__.call(null);(statearr_12394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto__);
return statearr_12394;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6370__auto__);
});})(c__6368__auto__))
);
return c__6368__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12412 = {};return obj12412;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3539__auto__ = _;if(and__3539__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3539__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4178__auto__ = (((_ == null))?null:_);return (function (){var or__3551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12414 = {};return obj12414;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12636 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12636 = (function (cs,ch,mult,meta12637){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12637 = meta12637;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12636.cljs$lang$type = true;
cljs.core.async.t12636.cljs$lang$ctorStr = "cljs.core.async/t12636";
cljs.core.async.t12636.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t12636");
});})(cs))
;
cljs.core.async.t12636.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12636.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12636.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12636.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12636.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12636.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12636.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12638){var self__ = this;
var _12638__$1 = this;return self__.meta12637;
});})(cs))
;
cljs.core.async.t12636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12638,meta12637__$1){var self__ = this;
var _12638__$1 = this;return (new cljs.core.async.t12636(self__.cs,self__.ch,self__.mult,meta12637__$1));
});})(cs))
;
cljs.core.async.__GT_t12636 = ((function (cs){
return (function __GT_t12636(cs__$1,ch__$1,mult__$1,meta12637){return (new cljs.core.async.t12636(cs__$1,ch__$1,mult__$1,meta12637));
});})(cs))
;
}
return (new cljs.core.async.t12636(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6368__auto___12857 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6368__auto___12857,cs,m,dchan,dctr,done){
return (function (){var f__6369__auto__ = (function (){var switch__6353__auto__ = ((function (c__6368__auto___12857,cs,m,dchan,dctr,done){
return (function (state_12769){var state_val_12770 = (state_12769[(1)]);if((state_val_12770 === (7)))
{var inst_12765 = (state_12769[(2)]);var state_12769__$1 = state_12769;var statearr_12771_12858 = state_12769__$1;(statearr_12771_12858[(2)] = inst_12765);
(statearr_12771_12858[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (20)))
{var inst_12670 = (state_12769[(7)]);var inst_12680 = cljs.core.first.call(null,inst_12670);var inst_12681 = cljs.core.nth.call(null,inst_12680,(0),null);var inst_12682 = cljs.core.nth.call(null,inst_12680,(1),null);var state_12769__$1 = (function (){var statearr_12772 = state_12769;(statearr_12772[(8)] = inst_12681);
return statearr_12772;
})();if(cljs.core.truth_(inst_12682))
{var statearr_12773_12859 = state_12769__$1;(statearr_12773_12859[(1)] = (22));
} else
{var statearr_12774_12860 = state_12769__$1;(statearr_12774_12860[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (27)))
{var inst_12717 = (state_12769[(9)]);var inst_12712 = (state_12769[(10)]);var inst_12710 = (state_12769[(11)]);var inst_12641 = (state_12769[(12)]);var inst_12717__$1 = cljs.core._nth.call(null,inst_12710,inst_12712);var inst_12718 = cljs.core.async.put_BANG_.call(null,inst_12717__$1,inst_12641,done);var state_12769__$1 = (function (){var statearr_12775 = state_12769;(statearr_12775[(9)] = inst_12717__$1);
return statearr_12775;
})();if(cljs.core.truth_(inst_12718))
{var statearr_12776_12861 = state_12769__$1;(statearr_12776_12861[(1)] = (30));
} else
{var statearr_12777_12862 = state_12769__$1;(statearr_12777_12862[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (1)))
{var state_12769__$1 = state_12769;var statearr_12778_12863 = state_12769__$1;(statearr_12778_12863[(2)] = null);
(statearr_12778_12863[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (24)))
{var inst_12670 = (state_12769[(7)]);var inst_12687 = (state_12769[(2)]);var inst_12688 = cljs.core.next.call(null,inst_12670);var inst_12650 = inst_12688;var inst_12651 = null;var inst_12652 = (0);var inst_12653 = (0);var state_12769__$1 = (function (){var statearr_12779 = state_12769;(statearr_12779[(13)] = inst_12651);
(statearr_12779[(14)] = inst_12687);
(statearr_12779[(15)] = inst_12650);
(statearr_12779[(16)] = inst_12652);
(statearr_12779[(17)] = inst_12653);
return statearr_12779;
})();var statearr_12780_12864 = state_12769__$1;(statearr_12780_12864[(2)] = null);
(statearr_12780_12864[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (39)))
{var state_12769__$1 = state_12769;var statearr_12784_12865 = state_12769__$1;(statearr_12784_12865[(2)] = null);
(statearr_12784_12865[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (4)))
{var inst_12641 = (state_12769[(12)]);var inst_12641__$1 = (state_12769[(2)]);var inst_12642 = (inst_12641__$1 == null);var state_12769__$1 = (function (){var statearr_12785 = state_12769;(statearr_12785[(12)] = inst_12641__$1);
return statearr_12785;
})();if(cljs.core.truth_(inst_12642))
{var statearr_12786_12866 = state_12769__$1;(statearr_12786_12866[(1)] = (5));
} else
{var statearr_12787_12867 = state_12769__$1;(statearr_12787_12867[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (15)))
{var inst_12651 = (state_12769[(13)]);var inst_12650 = (state_12769[(15)]);var inst_12652 = (state_12769[(16)]);var inst_12653 = (state_12769[(17)]);var inst_12666 = (state_12769[(2)]);var inst_12667 = (inst_12653 + (1));var tmp12781 = inst_12651;var tmp12782 = inst_12650;var tmp12783 = inst_12652;var inst_12650__$1 = tmp12782;var inst_12651__$1 = tmp12781;var inst_12652__$1 = tmp12783;var inst_12653__$1 = inst_12667;var state_12769__$1 = (function (){var statearr_12788 = state_12769;(statearr_12788[(13)] = inst_12651__$1);
(statearr_12788[(15)] = inst_12650__$1);
(statearr_12788[(16)] = inst_12652__$1);
(statearr_12788[(18)] = inst_12666);
(statearr_12788[(17)] = inst_12653__$1);
return statearr_12788;
})();var statearr_12789_12868 = state_12769__$1;(statearr_12789_12868[(2)] = null);
(statearr_12789_12868[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (21)))
{var inst_12691 = (state_12769[(2)]);var state_12769__$1 = state_12769;var statearr_12793_12869 = state_12769__$1;(statearr_12793_12869[(2)] = inst_12691);
(statearr_12793_12869[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (31)))
{var inst_12717 = (state_12769[(9)]);var inst_12721 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12722 = cljs.core.async.untap_STAR_.call(null,m,inst_12717);var state_12769__$1 = (function (){var statearr_12794 = state_12769;(statearr_12794[(19)] = inst_12721);
return statearr_12794;
})();var statearr_12795_12870 = state_12769__$1;(statearr_12795_12870[(2)] = inst_12722);
(statearr_12795_12870[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (32)))
{var inst_12712 = (state_12769[(10)]);var inst_12711 = (state_12769[(20)]);var inst_12709 = (state_12769[(21)]);var inst_12710 = (state_12769[(11)]);var inst_12724 = (state_12769[(2)]);var inst_12725 = (inst_12712 + (1));var tmp12790 = inst_12711;var tmp12791 = inst_12709;var tmp12792 = inst_12710;var inst_12709__$1 = tmp12791;var inst_12710__$1 = tmp12792;var inst_12711__$1 = tmp12790;var inst_12712__$1 = inst_12725;var state_12769__$1 = (function (){var statearr_12796 = state_12769;(statearr_12796[(10)] = inst_12712__$1);
(statearr_12796[(20)] = inst_12711__$1);
(statearr_12796[(21)] = inst_12709__$1);
(statearr_12796[(11)] = inst_12710__$1);
(statearr_12796[(22)] = inst_12724);
return statearr_12796;
})();var statearr_12797_12871 = state_12769__$1;(statearr_12797_12871[(2)] = null);
(statearr_12797_12871[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (40)))
{var inst_12737 = (state_12769[(23)]);var inst_12741 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12742 = cljs.core.async.untap_STAR_.call(null,m,inst_12737);var state_12769__$1 = (function (){var statearr_12798 = state_12769;(statearr_12798[(24)] = inst_12741);
return statearr_12798;
})();var statearr_12799_12872 = state_12769__$1;(statearr_12799_12872[(2)] = inst_12742);
(statearr_12799_12872[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (33)))
{var inst_12728 = (state_12769[(25)]);var inst_12730 = cljs.core.chunked_seq_QMARK_.call(null,inst_12728);var state_12769__$1 = state_12769;if(inst_12730)
{var statearr_12800_12873 = state_12769__$1;(statearr_12800_12873[(1)] = (36));
} else
{var statearr_12801_12874 = state_12769__$1;(statearr_12801_12874[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (13)))
{var inst_12660 = (state_12769[(26)]);var inst_12663 = cljs.core.async.close_BANG_.call(null,inst_12660);var state_12769__$1 = state_12769;var statearr_12802_12875 = state_12769__$1;(statearr_12802_12875[(2)] = inst_12663);
(statearr_12802_12875[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (22)))
{var inst_12681 = (state_12769[(8)]);var inst_12684 = cljs.core.async.close_BANG_.call(null,inst_12681);var state_12769__$1 = state_12769;var statearr_12803_12876 = state_12769__$1;(statearr_12803_12876[(2)] = inst_12684);
(statearr_12803_12876[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (36)))
{var inst_12728 = (state_12769[(25)]);var inst_12732 = cljs.core.chunk_first.call(null,inst_12728);var inst_12733 = cljs.core.chunk_rest.call(null,inst_12728);var inst_12734 = cljs.core.count.call(null,inst_12732);var inst_12709 = inst_12733;var inst_12710 = inst_12732;var inst_12711 = inst_12734;var inst_12712 = (0);var state_12769__$1 = (function (){var statearr_12804 = state_12769;(statearr_12804[(10)] = inst_12712);
(statearr_12804[(20)] = inst_12711);
(statearr_12804[(21)] = inst_12709);
(statearr_12804[(11)] = inst_12710);
return statearr_12804;
})();var statearr_12805_12877 = state_12769__$1;(statearr_12805_12877[(2)] = null);
(statearr_12805_12877[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (41)))
{var inst_12728 = (state_12769[(25)]);var inst_12744 = (state_12769[(2)]);var inst_12745 = cljs.core.next.call(null,inst_12728);var inst_12709 = inst_12745;var inst_12710 = null;var inst_12711 = (0);var inst_12712 = (0);var state_12769__$1 = (function (){var statearr_12806 = state_12769;(statearr_12806[(10)] = inst_12712);
(statearr_12806[(20)] = inst_12711);
(statearr_12806[(21)] = inst_12709);
(statearr_12806[(11)] = inst_12710);
(statearr_12806[(27)] = inst_12744);
return statearr_12806;
})();var statearr_12807_12878 = state_12769__$1;(statearr_12807_12878[(2)] = null);
(statearr_12807_12878[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (43)))
{var state_12769__$1 = state_12769;var statearr_12808_12879 = state_12769__$1;(statearr_12808_12879[(2)] = null);
(statearr_12808_12879[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (29)))
{var inst_12753 = (state_12769[(2)]);var state_12769__$1 = state_12769;var statearr_12809_12880 = state_12769__$1;(statearr_12809_12880[(2)] = inst_12753);
(statearr_12809_12880[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (44)))
{var inst_12762 = (state_12769[(2)]);var state_12769__$1 = (function (){var statearr_12810 = state_12769;(statearr_12810[(28)] = inst_12762);
return statearr_12810;
})();var statearr_12811_12881 = state_12769__$1;(statearr_12811_12881[(2)] = null);
(statearr_12811_12881[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (6)))
{var inst_12701 = (state_12769[(29)]);var inst_12700 = cljs.core.deref.call(null,cs);var inst_12701__$1 = cljs.core.keys.call(null,inst_12700);var inst_12702 = cljs.core.count.call(null,inst_12701__$1);var inst_12703 = cljs.core.reset_BANG_.call(null,dctr,inst_12702);var inst_12708 = cljs.core.seq.call(null,inst_12701__$1);var inst_12709 = inst_12708;var inst_12710 = null;var inst_12711 = (0);var inst_12712 = (0);var state_12769__$1 = (function (){var statearr_12812 = state_12769;(statearr_12812[(10)] = inst_12712);
(statearr_12812[(20)] = inst_12711);
(statearr_12812[(21)] = inst_12709);
(statearr_12812[(11)] = inst_12710);
(statearr_12812[(29)] = inst_12701__$1);
(statearr_12812[(30)] = inst_12703);
return statearr_12812;
})();var statearr_12813_12882 = state_12769__$1;(statearr_12813_12882[(2)] = null);
(statearr_12813_12882[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (28)))
{var inst_12709 = (state_12769[(21)]);var inst_12728 = (state_12769[(25)]);var inst_12728__$1 = cljs.core.seq.call(null,inst_12709);var state_12769__$1 = (function (){var statearr_12814 = state_12769;(statearr_12814[(25)] = inst_12728__$1);
return statearr_12814;
})();if(inst_12728__$1)
{var statearr_12815_12883 = state_12769__$1;(statearr_12815_12883[(1)] = (33));
} else
{var statearr_12816_12884 = state_12769__$1;(statearr_12816_12884[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (25)))
{var inst_12712 = (state_12769[(10)]);var inst_12711 = (state_12769[(20)]);var inst_12714 = (inst_12712 < inst_12711);var inst_12715 = inst_12714;var state_12769__$1 = state_12769;if(cljs.core.truth_(inst_12715))
{var statearr_12817_12885 = state_12769__$1;(statearr_12817_12885[(1)] = (27));
} else
{var statearr_12818_12886 = state_12769__$1;(statearr_12818_12886[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (34)))
{var state_12769__$1 = state_12769;var statearr_12819_12887 = state_12769__$1;(statearr_12819_12887[(2)] = null);
(statearr_12819_12887[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (17)))
{var state_12769__$1 = state_12769;var statearr_12820_12888 = state_12769__$1;(statearr_12820_12888[(2)] = null);
(statearr_12820_12888[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (3)))
{var inst_12767 = (state_12769[(2)]);var state_12769__$1 = state_12769;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12769__$1,inst_12767);
} else
{if((state_val_12770 === (12)))
{var inst_12696 = (state_12769[(2)]);var state_12769__$1 = state_12769;var statearr_12821_12889 = state_12769__$1;(statearr_12821_12889[(2)] = inst_12696);
(statearr_12821_12889[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (2)))
{var state_12769__$1 = state_12769;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12769__$1,(4),ch);
} else
{if((state_val_12770 === (23)))
{var state_12769__$1 = state_12769;var statearr_12822_12890 = state_12769__$1;(statearr_12822_12890[(2)] = null);
(statearr_12822_12890[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (35)))
{var inst_12751 = (state_12769[(2)]);var state_12769__$1 = state_12769;var statearr_12823_12891 = state_12769__$1;(statearr_12823_12891[(2)] = inst_12751);
(statearr_12823_12891[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (19)))
{var inst_12670 = (state_12769[(7)]);var inst_12674 = cljs.core.chunk_first.call(null,inst_12670);var inst_12675 = cljs.core.chunk_rest.call(null,inst_12670);var inst_12676 = cljs.core.count.call(null,inst_12674);var inst_12650 = inst_12675;var inst_12651 = inst_12674;var inst_12652 = inst_12676;var inst_12653 = (0);var state_12769__$1 = (function (){var statearr_12824 = state_12769;(statearr_12824[(13)] = inst_12651);
(statearr_12824[(15)] = inst_12650);
(statearr_12824[(16)] = inst_12652);
(statearr_12824[(17)] = inst_12653);
return statearr_12824;
})();var statearr_12825_12892 = state_12769__$1;(statearr_12825_12892[(2)] = null);
(statearr_12825_12892[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (11)))
{var inst_12650 = (state_12769[(15)]);var inst_12670 = (state_12769[(7)]);var inst_12670__$1 = cljs.core.seq.call(null,inst_12650);var state_12769__$1 = (function (){var statearr_12826 = state_12769;(statearr_12826[(7)] = inst_12670__$1);
return statearr_12826;
})();if(inst_12670__$1)
{var statearr_12827_12893 = state_12769__$1;(statearr_12827_12893[(1)] = (16));
} else
{var statearr_12828_12894 = state_12769__$1;(statearr_12828_12894[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (9)))
{var inst_12698 = (state_12769[(2)]);var state_12769__$1 = state_12769;var statearr_12829_12895 = state_12769__$1;(statearr_12829_12895[(2)] = inst_12698);
(statearr_12829_12895[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (5)))
{var inst_12648 = cljs.core.deref.call(null,cs);var inst_12649 = cljs.core.seq.call(null,inst_12648);var inst_12650 = inst_12649;var inst_12651 = null;var inst_12652 = (0);var inst_12653 = (0);var state_12769__$1 = (function (){var statearr_12830 = state_12769;(statearr_12830[(13)] = inst_12651);
(statearr_12830[(15)] = inst_12650);
(statearr_12830[(16)] = inst_12652);
(statearr_12830[(17)] = inst_12653);
return statearr_12830;
})();var statearr_12831_12896 = state_12769__$1;(statearr_12831_12896[(2)] = null);
(statearr_12831_12896[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (14)))
{var state_12769__$1 = state_12769;var statearr_12832_12897 = state_12769__$1;(statearr_12832_12897[(2)] = null);
(statearr_12832_12897[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (45)))
{var inst_12759 = (state_12769[(2)]);var state_12769__$1 = state_12769;var statearr_12833_12898 = state_12769__$1;(statearr_12833_12898[(2)] = inst_12759);
(statearr_12833_12898[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (26)))
{var inst_12701 = (state_12769[(29)]);var inst_12755 = (state_12769[(2)]);var inst_12756 = cljs.core.seq.call(null,inst_12701);var state_12769__$1 = (function (){var statearr_12834 = state_12769;(statearr_12834[(31)] = inst_12755);
return statearr_12834;
})();if(inst_12756)
{var statearr_12835_12899 = state_12769__$1;(statearr_12835_12899[(1)] = (42));
} else
{var statearr_12836_12900 = state_12769__$1;(statearr_12836_12900[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (16)))
{var inst_12670 = (state_12769[(7)]);var inst_12672 = cljs.core.chunked_seq_QMARK_.call(null,inst_12670);var state_12769__$1 = state_12769;if(inst_12672)
{var statearr_12837_12901 = state_12769__$1;(statearr_12837_12901[(1)] = (19));
} else
{var statearr_12838_12902 = state_12769__$1;(statearr_12838_12902[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (38)))
{var inst_12748 = (state_12769[(2)]);var state_12769__$1 = state_12769;var statearr_12839_12903 = state_12769__$1;(statearr_12839_12903[(2)] = inst_12748);
(statearr_12839_12903[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (30)))
{var state_12769__$1 = state_12769;var statearr_12840_12904 = state_12769__$1;(statearr_12840_12904[(2)] = null);
(statearr_12840_12904[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (10)))
{var inst_12651 = (state_12769[(13)]);var inst_12653 = (state_12769[(17)]);var inst_12659 = cljs.core._nth.call(null,inst_12651,inst_12653);var inst_12660 = cljs.core.nth.call(null,inst_12659,(0),null);var inst_12661 = cljs.core.nth.call(null,inst_12659,(1),null);var state_12769__$1 = (function (){var statearr_12841 = state_12769;(statearr_12841[(26)] = inst_12660);
return statearr_12841;
})();if(cljs.core.truth_(inst_12661))
{var statearr_12842_12905 = state_12769__$1;(statearr_12842_12905[(1)] = (13));
} else
{var statearr_12843_12906 = state_12769__$1;(statearr_12843_12906[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (18)))
{var inst_12694 = (state_12769[(2)]);var state_12769__$1 = state_12769;var statearr_12844_12907 = state_12769__$1;(statearr_12844_12907[(2)] = inst_12694);
(statearr_12844_12907[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (42)))
{var state_12769__$1 = state_12769;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12769__$1,(45),dchan);
} else
{if((state_val_12770 === (37)))
{var inst_12737 = (state_12769[(23)]);var inst_12728 = (state_12769[(25)]);var inst_12641 = (state_12769[(12)]);var inst_12737__$1 = cljs.core.first.call(null,inst_12728);var inst_12738 = cljs.core.async.put_BANG_.call(null,inst_12737__$1,inst_12641,done);var state_12769__$1 = (function (){var statearr_12845 = state_12769;(statearr_12845[(23)] = inst_12737__$1);
return statearr_12845;
})();if(cljs.core.truth_(inst_12738))
{var statearr_12846_12908 = state_12769__$1;(statearr_12846_12908[(1)] = (39));
} else
{var statearr_12847_12909 = state_12769__$1;(statearr_12847_12909[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12770 === (8)))
{var inst_12652 = (state_12769[(16)]);var inst_12653 = (state_12769[(17)]);var inst_12655 = (inst_12653 < inst_12652);var inst_12656 = inst_12655;var state_12769__$1 = state_12769;if(cljs.core.truth_(inst_12656))
{var statearr_12848_12910 = state_12769__$1;(statearr_12848_12910[(1)] = (10));
} else
{var statearr_12849_12911 = state_12769__$1;(statearr_12849_12911[(1)] = (11));
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
}
}
}
}
}
}
}
});})(c__6368__auto___12857,cs,m,dchan,dctr,done))
;return ((function (switch__6353__auto__,c__6368__auto___12857,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6354__auto__ = null;
var state_machine__6354__auto____0 = (function (){var statearr_12853 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12853[(0)] = state_machine__6354__auto__);
(statearr_12853[(1)] = (1));
return statearr_12853;
});
var state_machine__6354__auto____1 = (function (state_12769){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_12769);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e12854){if((e12854 instanceof Object))
{var ex__6357__auto__ = e12854;var statearr_12855_12912 = state_12769;(statearr_12855_12912[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12769);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12854;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12913 = state_12769;
state_12769 = G__12913;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_12769){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_12769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto___12857,cs,m,dchan,dctr,done))
})();var state__6370__auto__ = (function (){var statearr_12856 = f__6369__auto__.call(null);(statearr_12856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto___12857);
return statearr_12856;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6370__auto__);
});})(c__6368__auto___12857,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12915 = {};return obj12915;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t13035 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13035 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13036){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13036 = meta13036;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13035.cljs$lang$type = true;
cljs.core.async.t13035.cljs$lang$ctorStr = "cljs.core.async/t13035";
cljs.core.async.t13035.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t13035");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13035.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13035.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13035.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13035.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13035.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13035.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13035.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13035.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13035.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13037){var self__ = this;
var _13037__$1 = this;return self__.meta13036;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13037,meta13036__$1){var self__ = this;
var _13037__$1 = this;return (new cljs.core.async.t13035(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13036__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13035 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13035(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13036){return (new cljs.core.async.t13035(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13036));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13035(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6368__auto___13154 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6368__auto___13154,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6369__auto__ = (function (){var switch__6353__auto__ = ((function (c__6368__auto___13154,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13107){var state_val_13108 = (state_13107[(1)]);if((state_val_13108 === (7)))
{var inst_13051 = (state_13107[(7)]);var inst_13056 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13051);var state_13107__$1 = state_13107;var statearr_13109_13155 = state_13107__$1;(statearr_13109_13155[(2)] = inst_13056);
(statearr_13109_13155[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13108 === (20)))
{var inst_13066 = (state_13107[(8)]);var state_13107__$1 = state_13107;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13107__$1,(23),out,inst_13066);
} else
{if((state_val_13108 === (1)))
{var inst_13041 = (state_13107[(9)]);var inst_13041__$1 = calc_state.call(null);var inst_13042 = cljs.core.seq_QMARK_.call(null,inst_13041__$1);var state_13107__$1 = (function (){var statearr_13110 = state_13107;(statearr_13110[(9)] = inst_13041__$1);
return statearr_13110;
})();if(inst_13042)
{var statearr_13111_13156 = state_13107__$1;(statearr_13111_13156[(1)] = (2));
} else
{var statearr_13112_13157 = state_13107__$1;(statearr_13112_13157[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13108 === (24)))
{var inst_13059 = (state_13107[(10)]);var inst_13051 = inst_13059;var state_13107__$1 = (function (){var statearr_13113 = state_13107;(statearr_13113[(7)] = inst_13051);
return statearr_13113;
})();var statearr_13114_13158 = state_13107__$1;(statearr_13114_13158[(2)] = null);
(statearr_13114_13158[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13108 === (4)))
{var inst_13041 = (state_13107[(9)]);var inst_13047 = (state_13107[(2)]);var inst_13048 = cljs.core.get.call(null,inst_13047,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13049 = cljs.core.get.call(null,inst_13047,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13050 = cljs.core.get.call(null,inst_13047,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_13051 = inst_13041;var state_13107__$1 = (function (){var statearr_13115 = state_13107;(statearr_13115[(7)] = inst_13051);
(statearr_13115[(11)] = inst_13050);
(statearr_13115[(12)] = inst_13048);
(statearr_13115[(13)] = inst_13049);
return statearr_13115;
})();var statearr_13116_13159 = state_13107__$1;(statearr_13116_13159[(2)] = null);
(statearr_13116_13159[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13108 === (15)))
{var state_13107__$1 = state_13107;var statearr_13117_13160 = state_13107__$1;(statearr_13117_13160[(2)] = null);
(statearr_13117_13160[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13108 === (21)))
{var inst_13059 = (state_13107[(10)]);var inst_13051 = inst_13059;var state_13107__$1 = (function (){var statearr_13118 = state_13107;(statearr_13118[(7)] = inst_13051);
return statearr_13118;
})();var statearr_13119_13161 = state_13107__$1;(statearr_13119_13161[(2)] = null);
(statearr_13119_13161[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13108 === (13)))
{var inst_13103 = (state_13107[(2)]);var state_13107__$1 = state_13107;var statearr_13120_13162 = state_13107__$1;(statearr_13120_13162[(2)] = inst_13103);
(statearr_13120_13162[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13108 === (22)))
{var inst_13101 = (state_13107[(2)]);var state_13107__$1 = state_13107;var statearr_13121_13163 = state_13107__$1;(statearr_13121_13163[(2)] = inst_13101);
(statearr_13121_13163[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13108 === (6)))
{var inst_13105 = (state_13107[(2)]);var state_13107__$1 = state_13107;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13107__$1,inst_13105);
} else
{if((state_val_13108 === (25)))
{var state_13107__$1 = state_13107;var statearr_13122_13164 = state_13107__$1;(statearr_13122_13164[(2)] = null);
(statearr_13122_13164[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13108 === (17)))
{var inst_13081 = (state_13107[(14)]);var state_13107__$1 = state_13107;var statearr_13123_13165 = state_13107__$1;(statearr_13123_13165[(2)] = inst_13081);
(statearr_13123_13165[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13108 === (3)))
{var inst_13041 = (state_13107[(9)]);var state_13107__$1 = state_13107;var statearr_13124_13166 = state_13107__$1;(statearr_13124_13166[(2)] = inst_13041);
(statearr_13124_13166[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13108 === (12)))
{var inst_13067 = (state_13107[(15)]);var inst_13081 = (state_13107[(14)]);var inst_13062 = (state_13107[(16)]);var inst_13081__$1 = inst_13062.call(null,inst_13067);var state_13107__$1 = (function (){var statearr_13125 = state_13107;(statearr_13125[(14)] = inst_13081__$1);
return statearr_13125;
})();if(cljs.core.truth_(inst_13081__$1))
{var statearr_13126_13167 = state_13107__$1;(statearr_13126_13167[(1)] = (17));
} else
{var statearr_13127_13168 = state_13107__$1;(statearr_13127_13168[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13108 === (2)))
{var inst_13041 = (state_13107[(9)]);var inst_13044 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13041);var state_13107__$1 = state_13107;var statearr_13128_13169 = state_13107__$1;(statearr_13128_13169[(2)] = inst_13044);
(statearr_13128_13169[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13108 === (23)))
{var inst_13092 = (state_13107[(2)]);var state_13107__$1 = state_13107;if(cljs.core.truth_(inst_13092))
{var statearr_13129_13170 = state_13107__$1;(statearr_13129_13170[(1)] = (24));
} else
{var statearr_13130_13171 = state_13107__$1;(statearr_13130_13171[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13108 === (19)))
{var inst_13089 = (state_13107[(2)]);var state_13107__$1 = state_13107;if(cljs.core.truth_(inst_13089))
{var statearr_13131_13172 = state_13107__$1;(statearr_13131_13172[(1)] = (20));
} else
{var statearr_13132_13173 = state_13107__$1;(statearr_13132_13173[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13108 === (11)))
{var inst_13066 = (state_13107[(8)]);var inst_13072 = (inst_13066 == null);var state_13107__$1 = state_13107;if(cljs.core.truth_(inst_13072))
{var statearr_13133_13174 = state_13107__$1;(statearr_13133_13174[(1)] = (14));
} else
{var statearr_13134_13175 = state_13107__$1;(statearr_13134_13175[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13108 === (9)))
{var inst_13059 = (state_13107[(10)]);var inst_13059__$1 = (state_13107[(2)]);var inst_13060 = cljs.core.get.call(null,inst_13059__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13061 = cljs.core.get.call(null,inst_13059__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13062 = cljs.core.get.call(null,inst_13059__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_13107__$1 = (function (){var statearr_13135 = state_13107;(statearr_13135[(10)] = inst_13059__$1);
(statearr_13135[(17)] = inst_13061);
(statearr_13135[(16)] = inst_13062);
return statearr_13135;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13107__$1,(10),inst_13060);
} else
{if((state_val_13108 === (5)))
{var inst_13051 = (state_13107[(7)]);var inst_13054 = cljs.core.seq_QMARK_.call(null,inst_13051);var state_13107__$1 = state_13107;if(inst_13054)
{var statearr_13136_13176 = state_13107__$1;(statearr_13136_13176[(1)] = (7));
} else
{var statearr_13137_13177 = state_13107__$1;(statearr_13137_13177[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13108 === (14)))
{var inst_13067 = (state_13107[(15)]);var inst_13074 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13067);var state_13107__$1 = state_13107;var statearr_13138_13178 = state_13107__$1;(statearr_13138_13178[(2)] = inst_13074);
(statearr_13138_13178[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13108 === (26)))
{var inst_13097 = (state_13107[(2)]);var state_13107__$1 = state_13107;var statearr_13139_13179 = state_13107__$1;(statearr_13139_13179[(2)] = inst_13097);
(statearr_13139_13179[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13108 === (16)))
{var inst_13077 = (state_13107[(2)]);var inst_13078 = calc_state.call(null);var inst_13051 = inst_13078;var state_13107__$1 = (function (){var statearr_13140 = state_13107;(statearr_13140[(7)] = inst_13051);
(statearr_13140[(18)] = inst_13077);
return statearr_13140;
})();var statearr_13141_13180 = state_13107__$1;(statearr_13141_13180[(2)] = null);
(statearr_13141_13180[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13108 === (10)))
{var inst_13066 = (state_13107[(8)]);var inst_13067 = (state_13107[(15)]);var inst_13065 = (state_13107[(2)]);var inst_13066__$1 = cljs.core.nth.call(null,inst_13065,(0),null);var inst_13067__$1 = cljs.core.nth.call(null,inst_13065,(1),null);var inst_13068 = (inst_13066__$1 == null);var inst_13069 = cljs.core._EQ_.call(null,inst_13067__$1,change);var inst_13070 = (inst_13068) || (inst_13069);var state_13107__$1 = (function (){var statearr_13142 = state_13107;(statearr_13142[(8)] = inst_13066__$1);
(statearr_13142[(15)] = inst_13067__$1);
return statearr_13142;
})();if(cljs.core.truth_(inst_13070))
{var statearr_13143_13181 = state_13107__$1;(statearr_13143_13181[(1)] = (11));
} else
{var statearr_13144_13182 = state_13107__$1;(statearr_13144_13182[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13108 === (18)))
{var inst_13067 = (state_13107[(15)]);var inst_13061 = (state_13107[(17)]);var inst_13062 = (state_13107[(16)]);var inst_13084 = cljs.core.empty_QMARK_.call(null,inst_13062);var inst_13085 = inst_13061.call(null,inst_13067);var inst_13086 = cljs.core.not.call(null,inst_13085);var inst_13087 = (inst_13084) && (inst_13086);var state_13107__$1 = state_13107;var statearr_13145_13183 = state_13107__$1;(statearr_13145_13183[(2)] = inst_13087);
(statearr_13145_13183[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13108 === (8)))
{var inst_13051 = (state_13107[(7)]);var state_13107__$1 = state_13107;var statearr_13146_13184 = state_13107__$1;(statearr_13146_13184[(2)] = inst_13051);
(statearr_13146_13184[(1)] = (9));
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
}
}
}
}
}
}
}
});})(c__6368__auto___13154,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6353__auto__,c__6368__auto___13154,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6354__auto__ = null;
var state_machine__6354__auto____0 = (function (){var statearr_13150 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13150[(0)] = state_machine__6354__auto__);
(statearr_13150[(1)] = (1));
return statearr_13150;
});
var state_machine__6354__auto____1 = (function (state_13107){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_13107);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e13151){if((e13151 instanceof Object))
{var ex__6357__auto__ = e13151;var statearr_13152_13185 = state_13107;(statearr_13152_13185[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13107);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13151;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13186 = state_13107;
state_13107 = G__13186;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_13107){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_13107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto___13154,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6370__auto__ = (function (){var statearr_13153 = f__6369__auto__.call(null);(statearr_13153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto___13154);
return statearr_13153;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6370__auto__);
});})(c__6368__auto___13154,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj13188 = {};return obj13188;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3539__auto__ = p;if(and__3539__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3539__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4178__auto__ = (((p == null))?null:p);return (function (){var or__3551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3539__auto__ = p;if(and__3539__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3539__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4178__auto__ = (((p == null))?null:p);return (function (){var or__3551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3539__auto__ = p;if(and__3539__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3539__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4178__auto__ = (((p == null))?null:p);return (function (){var or__3551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3539__auto__ = p;if(and__3539__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4178__auto__ = (((p == null))?null:p);return (function (){var or__3551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3551__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3551__auto__,mults){
return (function (p1__13189_SHARP_){if(cljs.core.truth_(p1__13189_SHARP_.call(null,topic)))
{return p1__13189_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13189_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3551__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13312 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13312 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13313){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13313 = meta13313;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13312.cljs$lang$type = true;
cljs.core.async.t13312.cljs$lang$ctorStr = "cljs.core.async/t13312";
cljs.core.async.t13312.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t13312");
});})(mults,ensure_mult))
;
cljs.core.async.t13312.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13312.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13312.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13312.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13312.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13312.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13312.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13312.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13314){var self__ = this;
var _13314__$1 = this;return self__.meta13313;
});})(mults,ensure_mult))
;
cljs.core.async.t13312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13314,meta13313__$1){var self__ = this;
var _13314__$1 = this;return (new cljs.core.async.t13312(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13313__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13312 = ((function (mults,ensure_mult){
return (function __GT_t13312(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13313){return (new cljs.core.async.t13312(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13313));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13312(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6368__auto___13434 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6368__auto___13434,mults,ensure_mult,p){
return (function (){var f__6369__auto__ = (function (){var switch__6353__auto__ = ((function (c__6368__auto___13434,mults,ensure_mult,p){
return (function (state_13386){var state_val_13387 = (state_13386[(1)]);if((state_val_13387 === (7)))
{var inst_13382 = (state_13386[(2)]);var state_13386__$1 = state_13386;var statearr_13388_13435 = state_13386__$1;(statearr_13388_13435[(2)] = inst_13382);
(statearr_13388_13435[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13387 === (20)))
{var state_13386__$1 = state_13386;var statearr_13389_13436 = state_13386__$1;(statearr_13389_13436[(2)] = null);
(statearr_13389_13436[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13387 === (1)))
{var state_13386__$1 = state_13386;var statearr_13390_13437 = state_13386__$1;(statearr_13390_13437[(2)] = null);
(statearr_13390_13437[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13387 === (24)))
{var inst_13365 = (state_13386[(7)]);var inst_13374 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13365);var state_13386__$1 = state_13386;var statearr_13391_13438 = state_13386__$1;(statearr_13391_13438[(2)] = inst_13374);
(statearr_13391_13438[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13387 === (4)))
{var inst_13317 = (state_13386[(8)]);var inst_13317__$1 = (state_13386[(2)]);var inst_13318 = (inst_13317__$1 == null);var state_13386__$1 = (function (){var statearr_13392 = state_13386;(statearr_13392[(8)] = inst_13317__$1);
return statearr_13392;
})();if(cljs.core.truth_(inst_13318))
{var statearr_13393_13439 = state_13386__$1;(statearr_13393_13439[(1)] = (5));
} else
{var statearr_13394_13440 = state_13386__$1;(statearr_13394_13440[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13387 === (15)))
{var inst_13359 = (state_13386[(2)]);var state_13386__$1 = state_13386;var statearr_13395_13441 = state_13386__$1;(statearr_13395_13441[(2)] = inst_13359);
(statearr_13395_13441[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13387 === (21)))
{var inst_13379 = (state_13386[(2)]);var state_13386__$1 = (function (){var statearr_13396 = state_13386;(statearr_13396[(9)] = inst_13379);
return statearr_13396;
})();var statearr_13397_13442 = state_13386__$1;(statearr_13397_13442[(2)] = null);
(statearr_13397_13442[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13387 === (13)))
{var inst_13341 = (state_13386[(10)]);var inst_13343 = cljs.core.chunked_seq_QMARK_.call(null,inst_13341);var state_13386__$1 = state_13386;if(inst_13343)
{var statearr_13398_13443 = state_13386__$1;(statearr_13398_13443[(1)] = (16));
} else
{var statearr_13399_13444 = state_13386__$1;(statearr_13399_13444[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13387 === (22)))
{var inst_13371 = (state_13386[(2)]);var state_13386__$1 = state_13386;if(cljs.core.truth_(inst_13371))
{var statearr_13400_13445 = state_13386__$1;(statearr_13400_13445[(1)] = (23));
} else
{var statearr_13401_13446 = state_13386__$1;(statearr_13401_13446[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13387 === (6)))
{var inst_13317 = (state_13386[(8)]);var inst_13367 = (state_13386[(11)]);var inst_13365 = (state_13386[(7)]);var inst_13365__$1 = topic_fn.call(null,inst_13317);var inst_13366 = cljs.core.deref.call(null,mults);var inst_13367__$1 = cljs.core.get.call(null,inst_13366,inst_13365__$1);var state_13386__$1 = (function (){var statearr_13402 = state_13386;(statearr_13402[(11)] = inst_13367__$1);
(statearr_13402[(7)] = inst_13365__$1);
return statearr_13402;
})();if(cljs.core.truth_(inst_13367__$1))
{var statearr_13403_13447 = state_13386__$1;(statearr_13403_13447[(1)] = (19));
} else
{var statearr_13404_13448 = state_13386__$1;(statearr_13404_13448[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13387 === (25)))
{var inst_13376 = (state_13386[(2)]);var state_13386__$1 = state_13386;var statearr_13405_13449 = state_13386__$1;(statearr_13405_13449[(2)] = inst_13376);
(statearr_13405_13449[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13387 === (17)))
{var inst_13341 = (state_13386[(10)]);var inst_13350 = cljs.core.first.call(null,inst_13341);var inst_13351 = cljs.core.async.muxch_STAR_.call(null,inst_13350);var inst_13352 = cljs.core.async.close_BANG_.call(null,inst_13351);var inst_13353 = cljs.core.next.call(null,inst_13341);var inst_13327 = inst_13353;var inst_13328 = null;var inst_13329 = (0);var inst_13330 = (0);var state_13386__$1 = (function (){var statearr_13406 = state_13386;(statearr_13406[(12)] = inst_13328);
(statearr_13406[(13)] = inst_13352);
(statearr_13406[(14)] = inst_13329);
(statearr_13406[(15)] = inst_13327);
(statearr_13406[(16)] = inst_13330);
return statearr_13406;
})();var statearr_13407_13450 = state_13386__$1;(statearr_13407_13450[(2)] = null);
(statearr_13407_13450[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13387 === (3)))
{var inst_13384 = (state_13386[(2)]);var state_13386__$1 = state_13386;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13386__$1,inst_13384);
} else
{if((state_val_13387 === (12)))
{var inst_13361 = (state_13386[(2)]);var state_13386__$1 = state_13386;var statearr_13408_13451 = state_13386__$1;(statearr_13408_13451[(2)] = inst_13361);
(statearr_13408_13451[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13387 === (2)))
{var state_13386__$1 = state_13386;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13386__$1,(4),ch);
} else
{if((state_val_13387 === (23)))
{var state_13386__$1 = state_13386;var statearr_13409_13452 = state_13386__$1;(statearr_13409_13452[(2)] = null);
(statearr_13409_13452[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13387 === (19)))
{var inst_13317 = (state_13386[(8)]);var inst_13367 = (state_13386[(11)]);var inst_13369 = cljs.core.async.muxch_STAR_.call(null,inst_13367);var state_13386__$1 = state_13386;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13386__$1,(22),inst_13369,inst_13317);
} else
{if((state_val_13387 === (11)))
{var inst_13341 = (state_13386[(10)]);var inst_13327 = (state_13386[(15)]);var inst_13341__$1 = cljs.core.seq.call(null,inst_13327);var state_13386__$1 = (function (){var statearr_13410 = state_13386;(statearr_13410[(10)] = inst_13341__$1);
return statearr_13410;
})();if(inst_13341__$1)
{var statearr_13411_13453 = state_13386__$1;(statearr_13411_13453[(1)] = (13));
} else
{var statearr_13412_13454 = state_13386__$1;(statearr_13412_13454[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13387 === (9)))
{var inst_13363 = (state_13386[(2)]);var state_13386__$1 = state_13386;var statearr_13413_13455 = state_13386__$1;(statearr_13413_13455[(2)] = inst_13363);
(statearr_13413_13455[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13387 === (5)))
{var inst_13324 = cljs.core.deref.call(null,mults);var inst_13325 = cljs.core.vals.call(null,inst_13324);var inst_13326 = cljs.core.seq.call(null,inst_13325);var inst_13327 = inst_13326;var inst_13328 = null;var inst_13329 = (0);var inst_13330 = (0);var state_13386__$1 = (function (){var statearr_13414 = state_13386;(statearr_13414[(12)] = inst_13328);
(statearr_13414[(14)] = inst_13329);
(statearr_13414[(15)] = inst_13327);
(statearr_13414[(16)] = inst_13330);
return statearr_13414;
})();var statearr_13415_13456 = state_13386__$1;(statearr_13415_13456[(2)] = null);
(statearr_13415_13456[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13387 === (14)))
{var state_13386__$1 = state_13386;var statearr_13419_13457 = state_13386__$1;(statearr_13419_13457[(2)] = null);
(statearr_13419_13457[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13387 === (16)))
{var inst_13341 = (state_13386[(10)]);var inst_13345 = cljs.core.chunk_first.call(null,inst_13341);var inst_13346 = cljs.core.chunk_rest.call(null,inst_13341);var inst_13347 = cljs.core.count.call(null,inst_13345);var inst_13327 = inst_13346;var inst_13328 = inst_13345;var inst_13329 = inst_13347;var inst_13330 = (0);var state_13386__$1 = (function (){var statearr_13420 = state_13386;(statearr_13420[(12)] = inst_13328);
(statearr_13420[(14)] = inst_13329);
(statearr_13420[(15)] = inst_13327);
(statearr_13420[(16)] = inst_13330);
return statearr_13420;
})();var statearr_13421_13458 = state_13386__$1;(statearr_13421_13458[(2)] = null);
(statearr_13421_13458[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13387 === (10)))
{var inst_13328 = (state_13386[(12)]);var inst_13329 = (state_13386[(14)]);var inst_13327 = (state_13386[(15)]);var inst_13330 = (state_13386[(16)]);var inst_13335 = cljs.core._nth.call(null,inst_13328,inst_13330);var inst_13336 = cljs.core.async.muxch_STAR_.call(null,inst_13335);var inst_13337 = cljs.core.async.close_BANG_.call(null,inst_13336);var inst_13338 = (inst_13330 + (1));var tmp13416 = inst_13328;var tmp13417 = inst_13329;var tmp13418 = inst_13327;var inst_13327__$1 = tmp13418;var inst_13328__$1 = tmp13416;var inst_13329__$1 = tmp13417;var inst_13330__$1 = inst_13338;var state_13386__$1 = (function (){var statearr_13422 = state_13386;(statearr_13422[(17)] = inst_13337);
(statearr_13422[(12)] = inst_13328__$1);
(statearr_13422[(14)] = inst_13329__$1);
(statearr_13422[(15)] = inst_13327__$1);
(statearr_13422[(16)] = inst_13330__$1);
return statearr_13422;
})();var statearr_13423_13459 = state_13386__$1;(statearr_13423_13459[(2)] = null);
(statearr_13423_13459[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13387 === (18)))
{var inst_13356 = (state_13386[(2)]);var state_13386__$1 = state_13386;var statearr_13424_13460 = state_13386__$1;(statearr_13424_13460[(2)] = inst_13356);
(statearr_13424_13460[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13387 === (8)))
{var inst_13329 = (state_13386[(14)]);var inst_13330 = (state_13386[(16)]);var inst_13332 = (inst_13330 < inst_13329);var inst_13333 = inst_13332;var state_13386__$1 = state_13386;if(cljs.core.truth_(inst_13333))
{var statearr_13425_13461 = state_13386__$1;(statearr_13425_13461[(1)] = (10));
} else
{var statearr_13426_13462 = state_13386__$1;(statearr_13426_13462[(1)] = (11));
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
}
}
}
}
}
}
});})(c__6368__auto___13434,mults,ensure_mult,p))
;return ((function (switch__6353__auto__,c__6368__auto___13434,mults,ensure_mult,p){
return (function() {
var state_machine__6354__auto__ = null;
var state_machine__6354__auto____0 = (function (){var statearr_13430 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13430[(0)] = state_machine__6354__auto__);
(statearr_13430[(1)] = (1));
return statearr_13430;
});
var state_machine__6354__auto____1 = (function (state_13386){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_13386);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e13431){if((e13431 instanceof Object))
{var ex__6357__auto__ = e13431;var statearr_13432_13463 = state_13386;(statearr_13432_13463[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13386);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13431;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13464 = state_13386;
state_13386 = G__13464;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_13386){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_13386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto___13434,mults,ensure_mult,p))
})();var state__6370__auto__ = (function (){var statearr_13433 = f__6369__auto__.call(null);(statearr_13433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto___13434);
return statearr_13433;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6370__auto__);
});})(c__6368__auto___13434,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6368__auto___13601 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6368__auto___13601,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6369__auto__ = (function (){var switch__6353__auto__ = ((function (c__6368__auto___13601,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13571){var state_val_13572 = (state_13571[(1)]);if((state_val_13572 === (7)))
{var state_13571__$1 = state_13571;var statearr_13573_13602 = state_13571__$1;(statearr_13573_13602[(2)] = null);
(statearr_13573_13602[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13572 === (1)))
{var state_13571__$1 = state_13571;var statearr_13574_13603 = state_13571__$1;(statearr_13574_13603[(2)] = null);
(statearr_13574_13603[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13572 === (4)))
{var inst_13535 = (state_13571[(7)]);var inst_13537 = (inst_13535 < cnt);var state_13571__$1 = state_13571;if(cljs.core.truth_(inst_13537))
{var statearr_13575_13604 = state_13571__$1;(statearr_13575_13604[(1)] = (6));
} else
{var statearr_13576_13605 = state_13571__$1;(statearr_13576_13605[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13572 === (15)))
{var inst_13567 = (state_13571[(2)]);var state_13571__$1 = state_13571;var statearr_13577_13606 = state_13571__$1;(statearr_13577_13606[(2)] = inst_13567);
(statearr_13577_13606[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13572 === (13)))
{var inst_13560 = cljs.core.async.close_BANG_.call(null,out);var state_13571__$1 = state_13571;var statearr_13578_13607 = state_13571__$1;(statearr_13578_13607[(2)] = inst_13560);
(statearr_13578_13607[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13572 === (6)))
{var state_13571__$1 = state_13571;var statearr_13579_13608 = state_13571__$1;(statearr_13579_13608[(2)] = null);
(statearr_13579_13608[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13572 === (3)))
{var inst_13569 = (state_13571[(2)]);var state_13571__$1 = state_13571;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13571__$1,inst_13569);
} else
{if((state_val_13572 === (12)))
{var inst_13557 = (state_13571[(8)]);var inst_13557__$1 = (state_13571[(2)]);var inst_13558 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13557__$1);var state_13571__$1 = (function (){var statearr_13580 = state_13571;(statearr_13580[(8)] = inst_13557__$1);
return statearr_13580;
})();if(cljs.core.truth_(inst_13558))
{var statearr_13581_13609 = state_13571__$1;(statearr_13581_13609[(1)] = (13));
} else
{var statearr_13582_13610 = state_13571__$1;(statearr_13582_13610[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13572 === (2)))
{var inst_13534 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13535 = (0);var state_13571__$1 = (function (){var statearr_13583 = state_13571;(statearr_13583[(7)] = inst_13535);
(statearr_13583[(9)] = inst_13534);
return statearr_13583;
})();var statearr_13584_13611 = state_13571__$1;(statearr_13584_13611[(2)] = null);
(statearr_13584_13611[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13572 === (11)))
{var inst_13535 = (state_13571[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13571,(10),Object,null,(9));var inst_13544 = chs__$1.call(null,inst_13535);var inst_13545 = done.call(null,inst_13535);var inst_13546 = cljs.core.async.take_BANG_.call(null,inst_13544,inst_13545);var state_13571__$1 = state_13571;var statearr_13585_13612 = state_13571__$1;(statearr_13585_13612[(2)] = inst_13546);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13571__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13572 === (9)))
{var inst_13535 = (state_13571[(7)]);var inst_13548 = (state_13571[(2)]);var inst_13549 = (inst_13535 + (1));var inst_13535__$1 = inst_13549;var state_13571__$1 = (function (){var statearr_13586 = state_13571;(statearr_13586[(7)] = inst_13535__$1);
(statearr_13586[(10)] = inst_13548);
return statearr_13586;
})();var statearr_13587_13613 = state_13571__$1;(statearr_13587_13613[(2)] = null);
(statearr_13587_13613[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13572 === (5)))
{var inst_13555 = (state_13571[(2)]);var state_13571__$1 = (function (){var statearr_13588 = state_13571;(statearr_13588[(11)] = inst_13555);
return statearr_13588;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13571__$1,(12),dchan);
} else
{if((state_val_13572 === (14)))
{var inst_13557 = (state_13571[(8)]);var inst_13562 = cljs.core.apply.call(null,f,inst_13557);var state_13571__$1 = state_13571;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13571__$1,(16),out,inst_13562);
} else
{if((state_val_13572 === (16)))
{var inst_13564 = (state_13571[(2)]);var state_13571__$1 = (function (){var statearr_13589 = state_13571;(statearr_13589[(12)] = inst_13564);
return statearr_13589;
})();var statearr_13590_13614 = state_13571__$1;(statearr_13590_13614[(2)] = null);
(statearr_13590_13614[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13572 === (10)))
{var inst_13539 = (state_13571[(2)]);var inst_13540 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13571__$1 = (function (){var statearr_13591 = state_13571;(statearr_13591[(13)] = inst_13539);
return statearr_13591;
})();var statearr_13592_13615 = state_13571__$1;(statearr_13592_13615[(2)] = inst_13540);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13571__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13572 === (8)))
{var inst_13553 = (state_13571[(2)]);var state_13571__$1 = state_13571;var statearr_13593_13616 = state_13571__$1;(statearr_13593_13616[(2)] = inst_13553);
(statearr_13593_13616[(1)] = (5));
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
});})(c__6368__auto___13601,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6353__auto__,c__6368__auto___13601,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6354__auto__ = null;
var state_machine__6354__auto____0 = (function (){var statearr_13597 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13597[(0)] = state_machine__6354__auto__);
(statearr_13597[(1)] = (1));
return statearr_13597;
});
var state_machine__6354__auto____1 = (function (state_13571){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_13571);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e13598){if((e13598 instanceof Object))
{var ex__6357__auto__ = e13598;var statearr_13599_13617 = state_13571;(statearr_13599_13617[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13571);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13598;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13618 = state_13571;
state_13571 = G__13618;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_13571){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_13571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto___13601,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6370__auto__ = (function (){var statearr_13600 = f__6369__auto__.call(null);(statearr_13600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto___13601);
return statearr_13600;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6370__auto__);
});})(c__6368__auto___13601,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6368__auto___13726 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6368__auto___13726,out){
return (function (){var f__6369__auto__ = (function (){var switch__6353__auto__ = ((function (c__6368__auto___13726,out){
return (function (state_13702){var state_val_13703 = (state_13702[(1)]);if((state_val_13703 === (7)))
{var inst_13681 = (state_13702[(7)]);var inst_13682 = (state_13702[(8)]);var inst_13681__$1 = (state_13702[(2)]);var inst_13682__$1 = cljs.core.nth.call(null,inst_13681__$1,(0),null);var inst_13683 = cljs.core.nth.call(null,inst_13681__$1,(1),null);var inst_13684 = (inst_13682__$1 == null);var state_13702__$1 = (function (){var statearr_13704 = state_13702;(statearr_13704[(7)] = inst_13681__$1);
(statearr_13704[(9)] = inst_13683);
(statearr_13704[(8)] = inst_13682__$1);
return statearr_13704;
})();if(cljs.core.truth_(inst_13684))
{var statearr_13705_13727 = state_13702__$1;(statearr_13705_13727[(1)] = (8));
} else
{var statearr_13706_13728 = state_13702__$1;(statearr_13706_13728[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13703 === (1)))
{var inst_13673 = cljs.core.vec.call(null,chs);var inst_13674 = inst_13673;var state_13702__$1 = (function (){var statearr_13707 = state_13702;(statearr_13707[(10)] = inst_13674);
return statearr_13707;
})();var statearr_13708_13729 = state_13702__$1;(statearr_13708_13729[(2)] = null);
(statearr_13708_13729[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13703 === (4)))
{var inst_13674 = (state_13702[(10)]);var state_13702__$1 = state_13702;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13702__$1,(7),inst_13674);
} else
{if((state_val_13703 === (6)))
{var inst_13698 = (state_13702[(2)]);var state_13702__$1 = state_13702;var statearr_13709_13730 = state_13702__$1;(statearr_13709_13730[(2)] = inst_13698);
(statearr_13709_13730[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13703 === (3)))
{var inst_13700 = (state_13702[(2)]);var state_13702__$1 = state_13702;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13702__$1,inst_13700);
} else
{if((state_val_13703 === (2)))
{var inst_13674 = (state_13702[(10)]);var inst_13676 = cljs.core.count.call(null,inst_13674);var inst_13677 = (inst_13676 > (0));var state_13702__$1 = state_13702;if(cljs.core.truth_(inst_13677))
{var statearr_13711_13731 = state_13702__$1;(statearr_13711_13731[(1)] = (4));
} else
{var statearr_13712_13732 = state_13702__$1;(statearr_13712_13732[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13703 === (11)))
{var inst_13674 = (state_13702[(10)]);var inst_13691 = (state_13702[(2)]);var tmp13710 = inst_13674;var inst_13674__$1 = tmp13710;var state_13702__$1 = (function (){var statearr_13713 = state_13702;(statearr_13713[(10)] = inst_13674__$1);
(statearr_13713[(11)] = inst_13691);
return statearr_13713;
})();var statearr_13714_13733 = state_13702__$1;(statearr_13714_13733[(2)] = null);
(statearr_13714_13733[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13703 === (9)))
{var inst_13682 = (state_13702[(8)]);var state_13702__$1 = state_13702;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13702__$1,(11),out,inst_13682);
} else
{if((state_val_13703 === (5)))
{var inst_13696 = cljs.core.async.close_BANG_.call(null,out);var state_13702__$1 = state_13702;var statearr_13715_13734 = state_13702__$1;(statearr_13715_13734[(2)] = inst_13696);
(statearr_13715_13734[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13703 === (10)))
{var inst_13694 = (state_13702[(2)]);var state_13702__$1 = state_13702;var statearr_13716_13735 = state_13702__$1;(statearr_13716_13735[(2)] = inst_13694);
(statearr_13716_13735[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13703 === (8)))
{var inst_13674 = (state_13702[(10)]);var inst_13681 = (state_13702[(7)]);var inst_13683 = (state_13702[(9)]);var inst_13682 = (state_13702[(8)]);var inst_13686 = (function (){var c = inst_13683;var v = inst_13682;var vec__13679 = inst_13681;var cs = inst_13674;return ((function (c,v,vec__13679,cs,inst_13674,inst_13681,inst_13683,inst_13682,state_val_13703,c__6368__auto___13726,out){
return (function (p1__13619_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13619_SHARP_);
});
;})(c,v,vec__13679,cs,inst_13674,inst_13681,inst_13683,inst_13682,state_val_13703,c__6368__auto___13726,out))
})();var inst_13687 = cljs.core.filterv.call(null,inst_13686,inst_13674);var inst_13674__$1 = inst_13687;var state_13702__$1 = (function (){var statearr_13717 = state_13702;(statearr_13717[(10)] = inst_13674__$1);
return statearr_13717;
})();var statearr_13718_13736 = state_13702__$1;(statearr_13718_13736[(2)] = null);
(statearr_13718_13736[(1)] = (2));
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
});})(c__6368__auto___13726,out))
;return ((function (switch__6353__auto__,c__6368__auto___13726,out){
return (function() {
var state_machine__6354__auto__ = null;
var state_machine__6354__auto____0 = (function (){var statearr_13722 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13722[(0)] = state_machine__6354__auto__);
(statearr_13722[(1)] = (1));
return statearr_13722;
});
var state_machine__6354__auto____1 = (function (state_13702){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_13702);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e13723){if((e13723 instanceof Object))
{var ex__6357__auto__ = e13723;var statearr_13724_13737 = state_13702;(statearr_13724_13737[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13702);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13723;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13738 = state_13702;
state_13702 = G__13738;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_13702){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_13702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto___13726,out))
})();var state__6370__auto__ = (function (){var statearr_13725 = f__6369__auto__.call(null);(statearr_13725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto___13726);
return statearr_13725;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6370__auto__);
});})(c__6368__auto___13726,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6368__auto___13831 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6368__auto___13831,out){
return (function (){var f__6369__auto__ = (function (){var switch__6353__auto__ = ((function (c__6368__auto___13831,out){
return (function (state_13808){var state_val_13809 = (state_13808[(1)]);if((state_val_13809 === (7)))
{var inst_13790 = (state_13808[(7)]);var inst_13790__$1 = (state_13808[(2)]);var inst_13791 = (inst_13790__$1 == null);var inst_13792 = cljs.core.not.call(null,inst_13791);var state_13808__$1 = (function (){var statearr_13810 = state_13808;(statearr_13810[(7)] = inst_13790__$1);
return statearr_13810;
})();if(inst_13792)
{var statearr_13811_13832 = state_13808__$1;(statearr_13811_13832[(1)] = (8));
} else
{var statearr_13812_13833 = state_13808__$1;(statearr_13812_13833[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13809 === (1)))
{var inst_13785 = (0);var state_13808__$1 = (function (){var statearr_13813 = state_13808;(statearr_13813[(8)] = inst_13785);
return statearr_13813;
})();var statearr_13814_13834 = state_13808__$1;(statearr_13814_13834[(2)] = null);
(statearr_13814_13834[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13809 === (4)))
{var state_13808__$1 = state_13808;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13808__$1,(7),ch);
} else
{if((state_val_13809 === (6)))
{var inst_13803 = (state_13808[(2)]);var state_13808__$1 = state_13808;var statearr_13815_13835 = state_13808__$1;(statearr_13815_13835[(2)] = inst_13803);
(statearr_13815_13835[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13809 === (3)))
{var inst_13805 = (state_13808[(2)]);var inst_13806 = cljs.core.async.close_BANG_.call(null,out);var state_13808__$1 = (function (){var statearr_13816 = state_13808;(statearr_13816[(9)] = inst_13805);
return statearr_13816;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13808__$1,inst_13806);
} else
{if((state_val_13809 === (2)))
{var inst_13785 = (state_13808[(8)]);var inst_13787 = (inst_13785 < n);var state_13808__$1 = state_13808;if(cljs.core.truth_(inst_13787))
{var statearr_13817_13836 = state_13808__$1;(statearr_13817_13836[(1)] = (4));
} else
{var statearr_13818_13837 = state_13808__$1;(statearr_13818_13837[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13809 === (11)))
{var inst_13785 = (state_13808[(8)]);var inst_13795 = (state_13808[(2)]);var inst_13796 = (inst_13785 + (1));var inst_13785__$1 = inst_13796;var state_13808__$1 = (function (){var statearr_13819 = state_13808;(statearr_13819[(10)] = inst_13795);
(statearr_13819[(8)] = inst_13785__$1);
return statearr_13819;
})();var statearr_13820_13838 = state_13808__$1;(statearr_13820_13838[(2)] = null);
(statearr_13820_13838[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13809 === (9)))
{var state_13808__$1 = state_13808;var statearr_13821_13839 = state_13808__$1;(statearr_13821_13839[(2)] = null);
(statearr_13821_13839[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13809 === (5)))
{var state_13808__$1 = state_13808;var statearr_13822_13840 = state_13808__$1;(statearr_13822_13840[(2)] = null);
(statearr_13822_13840[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13809 === (10)))
{var inst_13800 = (state_13808[(2)]);var state_13808__$1 = state_13808;var statearr_13823_13841 = state_13808__$1;(statearr_13823_13841[(2)] = inst_13800);
(statearr_13823_13841[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13809 === (8)))
{var inst_13790 = (state_13808[(7)]);var state_13808__$1 = state_13808;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13808__$1,(11),out,inst_13790);
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
});})(c__6368__auto___13831,out))
;return ((function (switch__6353__auto__,c__6368__auto___13831,out){
return (function() {
var state_machine__6354__auto__ = null;
var state_machine__6354__auto____0 = (function (){var statearr_13827 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13827[(0)] = state_machine__6354__auto__);
(statearr_13827[(1)] = (1));
return statearr_13827;
});
var state_machine__6354__auto____1 = (function (state_13808){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_13808);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e13828){if((e13828 instanceof Object))
{var ex__6357__auto__ = e13828;var statearr_13829_13842 = state_13808;(statearr_13829_13842[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13808);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13828;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13843 = state_13808;
state_13808 = G__13843;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_13808){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_13808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto___13831,out))
})();var state__6370__auto__ = (function (){var statearr_13830 = f__6369__auto__.call(null);(statearr_13830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto___13831);
return statearr_13830;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6370__auto__);
});})(c__6368__auto___13831,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6368__auto___13940 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6368__auto___13940,out){
return (function (){var f__6369__auto__ = (function (){var switch__6353__auto__ = ((function (c__6368__auto___13940,out){
return (function (state_13915){var state_val_13916 = (state_13915[(1)]);if((state_val_13916 === (7)))
{var inst_13910 = (state_13915[(2)]);var state_13915__$1 = state_13915;var statearr_13917_13941 = state_13915__$1;(statearr_13917_13941[(2)] = inst_13910);
(statearr_13917_13941[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13916 === (1)))
{var inst_13892 = null;var state_13915__$1 = (function (){var statearr_13918 = state_13915;(statearr_13918[(7)] = inst_13892);
return statearr_13918;
})();var statearr_13919_13942 = state_13915__$1;(statearr_13919_13942[(2)] = null);
(statearr_13919_13942[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13916 === (4)))
{var inst_13895 = (state_13915[(8)]);var inst_13895__$1 = (state_13915[(2)]);var inst_13896 = (inst_13895__$1 == null);var inst_13897 = cljs.core.not.call(null,inst_13896);var state_13915__$1 = (function (){var statearr_13920 = state_13915;(statearr_13920[(8)] = inst_13895__$1);
return statearr_13920;
})();if(inst_13897)
{var statearr_13921_13943 = state_13915__$1;(statearr_13921_13943[(1)] = (5));
} else
{var statearr_13922_13944 = state_13915__$1;(statearr_13922_13944[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13916 === (6)))
{var state_13915__$1 = state_13915;var statearr_13923_13945 = state_13915__$1;(statearr_13923_13945[(2)] = null);
(statearr_13923_13945[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13916 === (3)))
{var inst_13912 = (state_13915[(2)]);var inst_13913 = cljs.core.async.close_BANG_.call(null,out);var state_13915__$1 = (function (){var statearr_13924 = state_13915;(statearr_13924[(9)] = inst_13912);
return statearr_13924;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13915__$1,inst_13913);
} else
{if((state_val_13916 === (2)))
{var state_13915__$1 = state_13915;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13915__$1,(4),ch);
} else
{if((state_val_13916 === (11)))
{var inst_13895 = (state_13915[(8)]);var inst_13904 = (state_13915[(2)]);var inst_13892 = inst_13895;var state_13915__$1 = (function (){var statearr_13925 = state_13915;(statearr_13925[(10)] = inst_13904);
(statearr_13925[(7)] = inst_13892);
return statearr_13925;
})();var statearr_13926_13946 = state_13915__$1;(statearr_13926_13946[(2)] = null);
(statearr_13926_13946[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13916 === (9)))
{var inst_13895 = (state_13915[(8)]);var state_13915__$1 = state_13915;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13915__$1,(11),out,inst_13895);
} else
{if((state_val_13916 === (5)))
{var inst_13892 = (state_13915[(7)]);var inst_13895 = (state_13915[(8)]);var inst_13899 = cljs.core._EQ_.call(null,inst_13895,inst_13892);var state_13915__$1 = state_13915;if(inst_13899)
{var statearr_13928_13947 = state_13915__$1;(statearr_13928_13947[(1)] = (8));
} else
{var statearr_13929_13948 = state_13915__$1;(statearr_13929_13948[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13916 === (10)))
{var inst_13907 = (state_13915[(2)]);var state_13915__$1 = state_13915;var statearr_13930_13949 = state_13915__$1;(statearr_13930_13949[(2)] = inst_13907);
(statearr_13930_13949[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13916 === (8)))
{var inst_13892 = (state_13915[(7)]);var tmp13927 = inst_13892;var inst_13892__$1 = tmp13927;var state_13915__$1 = (function (){var statearr_13931 = state_13915;(statearr_13931[(7)] = inst_13892__$1);
return statearr_13931;
})();var statearr_13932_13950 = state_13915__$1;(statearr_13932_13950[(2)] = null);
(statearr_13932_13950[(1)] = (2));
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
});})(c__6368__auto___13940,out))
;return ((function (switch__6353__auto__,c__6368__auto___13940,out){
return (function() {
var state_machine__6354__auto__ = null;
var state_machine__6354__auto____0 = (function (){var statearr_13936 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13936[(0)] = state_machine__6354__auto__);
(statearr_13936[(1)] = (1));
return statearr_13936;
});
var state_machine__6354__auto____1 = (function (state_13915){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_13915);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e13937){if((e13937 instanceof Object))
{var ex__6357__auto__ = e13937;var statearr_13938_13951 = state_13915;(statearr_13938_13951[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13915);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13937;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13952 = state_13915;
state_13915 = G__13952;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_13915){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_13915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto___13940,out))
})();var state__6370__auto__ = (function (){var statearr_13939 = f__6369__auto__.call(null);(statearr_13939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto___13940);
return statearr_13939;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6370__auto__);
});})(c__6368__auto___13940,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6368__auto___14087 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6368__auto___14087,out){
return (function (){var f__6369__auto__ = (function (){var switch__6353__auto__ = ((function (c__6368__auto___14087,out){
return (function (state_14057){var state_val_14058 = (state_14057[(1)]);if((state_val_14058 === (7)))
{var inst_14053 = (state_14057[(2)]);var state_14057__$1 = state_14057;var statearr_14059_14088 = state_14057__$1;(statearr_14059_14088[(2)] = inst_14053);
(statearr_14059_14088[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14058 === (1)))
{var inst_14020 = (new Array(n));var inst_14021 = inst_14020;var inst_14022 = (0);var state_14057__$1 = (function (){var statearr_14060 = state_14057;(statearr_14060[(7)] = inst_14021);
(statearr_14060[(8)] = inst_14022);
return statearr_14060;
})();var statearr_14061_14089 = state_14057__$1;(statearr_14061_14089[(2)] = null);
(statearr_14061_14089[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14058 === (4)))
{var inst_14025 = (state_14057[(9)]);var inst_14025__$1 = (state_14057[(2)]);var inst_14026 = (inst_14025__$1 == null);var inst_14027 = cljs.core.not.call(null,inst_14026);var state_14057__$1 = (function (){var statearr_14062 = state_14057;(statearr_14062[(9)] = inst_14025__$1);
return statearr_14062;
})();if(inst_14027)
{var statearr_14063_14090 = state_14057__$1;(statearr_14063_14090[(1)] = (5));
} else
{var statearr_14064_14091 = state_14057__$1;(statearr_14064_14091[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14058 === (15)))
{var inst_14047 = (state_14057[(2)]);var state_14057__$1 = state_14057;var statearr_14065_14092 = state_14057__$1;(statearr_14065_14092[(2)] = inst_14047);
(statearr_14065_14092[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14058 === (13)))
{var state_14057__$1 = state_14057;var statearr_14066_14093 = state_14057__$1;(statearr_14066_14093[(2)] = null);
(statearr_14066_14093[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14058 === (6)))
{var inst_14022 = (state_14057[(8)]);var inst_14043 = (inst_14022 > (0));var state_14057__$1 = state_14057;if(cljs.core.truth_(inst_14043))
{var statearr_14067_14094 = state_14057__$1;(statearr_14067_14094[(1)] = (12));
} else
{var statearr_14068_14095 = state_14057__$1;(statearr_14068_14095[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14058 === (3)))
{var inst_14055 = (state_14057[(2)]);var state_14057__$1 = state_14057;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14057__$1,inst_14055);
} else
{if((state_val_14058 === (12)))
{var inst_14021 = (state_14057[(7)]);var inst_14045 = cljs.core.vec.call(null,inst_14021);var state_14057__$1 = state_14057;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14057__$1,(15),out,inst_14045);
} else
{if((state_val_14058 === (2)))
{var state_14057__$1 = state_14057;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14057__$1,(4),ch);
} else
{if((state_val_14058 === (11)))
{var inst_14037 = (state_14057[(2)]);var inst_14038 = (new Array(n));var inst_14021 = inst_14038;var inst_14022 = (0);var state_14057__$1 = (function (){var statearr_14069 = state_14057;(statearr_14069[(7)] = inst_14021);
(statearr_14069[(8)] = inst_14022);
(statearr_14069[(10)] = inst_14037);
return statearr_14069;
})();var statearr_14070_14096 = state_14057__$1;(statearr_14070_14096[(2)] = null);
(statearr_14070_14096[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14058 === (9)))
{var inst_14021 = (state_14057[(7)]);var inst_14035 = cljs.core.vec.call(null,inst_14021);var state_14057__$1 = state_14057;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14057__$1,(11),out,inst_14035);
} else
{if((state_val_14058 === (5)))
{var inst_14021 = (state_14057[(7)]);var inst_14022 = (state_14057[(8)]);var inst_14030 = (state_14057[(11)]);var inst_14025 = (state_14057[(9)]);var inst_14029 = (inst_14021[inst_14022] = inst_14025);var inst_14030__$1 = (inst_14022 + (1));var inst_14031 = (inst_14030__$1 < n);var state_14057__$1 = (function (){var statearr_14071 = state_14057;(statearr_14071[(11)] = inst_14030__$1);
(statearr_14071[(12)] = inst_14029);
return statearr_14071;
})();if(cljs.core.truth_(inst_14031))
{var statearr_14072_14097 = state_14057__$1;(statearr_14072_14097[(1)] = (8));
} else
{var statearr_14073_14098 = state_14057__$1;(statearr_14073_14098[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14058 === (14)))
{var inst_14050 = (state_14057[(2)]);var inst_14051 = cljs.core.async.close_BANG_.call(null,out);var state_14057__$1 = (function (){var statearr_14075 = state_14057;(statearr_14075[(13)] = inst_14050);
return statearr_14075;
})();var statearr_14076_14099 = state_14057__$1;(statearr_14076_14099[(2)] = inst_14051);
(statearr_14076_14099[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14058 === (10)))
{var inst_14041 = (state_14057[(2)]);var state_14057__$1 = state_14057;var statearr_14077_14100 = state_14057__$1;(statearr_14077_14100[(2)] = inst_14041);
(statearr_14077_14100[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14058 === (8)))
{var inst_14021 = (state_14057[(7)]);var inst_14030 = (state_14057[(11)]);var tmp14074 = inst_14021;var inst_14021__$1 = tmp14074;var inst_14022 = inst_14030;var state_14057__$1 = (function (){var statearr_14078 = state_14057;(statearr_14078[(7)] = inst_14021__$1);
(statearr_14078[(8)] = inst_14022);
return statearr_14078;
})();var statearr_14079_14101 = state_14057__$1;(statearr_14079_14101[(2)] = null);
(statearr_14079_14101[(1)] = (2));
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
});})(c__6368__auto___14087,out))
;return ((function (switch__6353__auto__,c__6368__auto___14087,out){
return (function() {
var state_machine__6354__auto__ = null;
var state_machine__6354__auto____0 = (function (){var statearr_14083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14083[(0)] = state_machine__6354__auto__);
(statearr_14083[(1)] = (1));
return statearr_14083;
});
var state_machine__6354__auto____1 = (function (state_14057){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_14057);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e14084){if((e14084 instanceof Object))
{var ex__6357__auto__ = e14084;var statearr_14085_14102 = state_14057;(statearr_14085_14102[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14057);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14084;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14103 = state_14057;
state_14057 = G__14103;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_14057){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_14057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto___14087,out))
})();var state__6370__auto__ = (function (){var statearr_14086 = f__6369__auto__.call(null);(statearr_14086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto___14087);
return statearr_14086;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6370__auto__);
});})(c__6368__auto___14087,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6368__auto___14246 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6368__auto___14246,out){
return (function (){var f__6369__auto__ = (function (){var switch__6353__auto__ = ((function (c__6368__auto___14246,out){
return (function (state_14216){var state_val_14217 = (state_14216[(1)]);if((state_val_14217 === (7)))
{var inst_14212 = (state_14216[(2)]);var state_14216__$1 = state_14216;var statearr_14218_14247 = state_14216__$1;(statearr_14218_14247[(2)] = inst_14212);
(statearr_14218_14247[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14217 === (1)))
{var inst_14175 = [];var inst_14176 = inst_14175;var inst_14177 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_14216__$1 = (function (){var statearr_14219 = state_14216;(statearr_14219[(7)] = inst_14176);
(statearr_14219[(8)] = inst_14177);
return statearr_14219;
})();var statearr_14220_14248 = state_14216__$1;(statearr_14220_14248[(2)] = null);
(statearr_14220_14248[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14217 === (4)))
{var inst_14180 = (state_14216[(9)]);var inst_14180__$1 = (state_14216[(2)]);var inst_14181 = (inst_14180__$1 == null);var inst_14182 = cljs.core.not.call(null,inst_14181);var state_14216__$1 = (function (){var statearr_14221 = state_14216;(statearr_14221[(9)] = inst_14180__$1);
return statearr_14221;
})();if(inst_14182)
{var statearr_14222_14249 = state_14216__$1;(statearr_14222_14249[(1)] = (5));
} else
{var statearr_14223_14250 = state_14216__$1;(statearr_14223_14250[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14217 === (15)))
{var inst_14206 = (state_14216[(2)]);var state_14216__$1 = state_14216;var statearr_14224_14251 = state_14216__$1;(statearr_14224_14251[(2)] = inst_14206);
(statearr_14224_14251[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14217 === (13)))
{var state_14216__$1 = state_14216;var statearr_14225_14252 = state_14216__$1;(statearr_14225_14252[(2)] = null);
(statearr_14225_14252[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14217 === (6)))
{var inst_14176 = (state_14216[(7)]);var inst_14201 = inst_14176.length;var inst_14202 = (inst_14201 > (0));var state_14216__$1 = state_14216;if(cljs.core.truth_(inst_14202))
{var statearr_14226_14253 = state_14216__$1;(statearr_14226_14253[(1)] = (12));
} else
{var statearr_14227_14254 = state_14216__$1;(statearr_14227_14254[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14217 === (3)))
{var inst_14214 = (state_14216[(2)]);var state_14216__$1 = state_14216;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14216__$1,inst_14214);
} else
{if((state_val_14217 === (12)))
{var inst_14176 = (state_14216[(7)]);var inst_14204 = cljs.core.vec.call(null,inst_14176);var state_14216__$1 = state_14216;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14216__$1,(15),out,inst_14204);
} else
{if((state_val_14217 === (2)))
{var state_14216__$1 = state_14216;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14216__$1,(4),ch);
} else
{if((state_val_14217 === (11)))
{var inst_14184 = (state_14216[(10)]);var inst_14180 = (state_14216[(9)]);var inst_14194 = (state_14216[(2)]);var inst_14195 = [];var inst_14196 = inst_14195.push(inst_14180);var inst_14176 = inst_14195;var inst_14177 = inst_14184;var state_14216__$1 = (function (){var statearr_14228 = state_14216;(statearr_14228[(11)] = inst_14196);
(statearr_14228[(7)] = inst_14176);
(statearr_14228[(8)] = inst_14177);
(statearr_14228[(12)] = inst_14194);
return statearr_14228;
})();var statearr_14229_14255 = state_14216__$1;(statearr_14229_14255[(2)] = null);
(statearr_14229_14255[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14217 === (9)))
{var inst_14176 = (state_14216[(7)]);var inst_14192 = cljs.core.vec.call(null,inst_14176);var state_14216__$1 = state_14216;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14216__$1,(11),out,inst_14192);
} else
{if((state_val_14217 === (5)))
{var inst_14184 = (state_14216[(10)]);var inst_14180 = (state_14216[(9)]);var inst_14177 = (state_14216[(8)]);var inst_14184__$1 = f.call(null,inst_14180);var inst_14185 = cljs.core._EQ_.call(null,inst_14184__$1,inst_14177);var inst_14186 = cljs.core.keyword_identical_QMARK_.call(null,inst_14177,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_14187 = (inst_14185) || (inst_14186);var state_14216__$1 = (function (){var statearr_14230 = state_14216;(statearr_14230[(10)] = inst_14184__$1);
return statearr_14230;
})();if(cljs.core.truth_(inst_14187))
{var statearr_14231_14256 = state_14216__$1;(statearr_14231_14256[(1)] = (8));
} else
{var statearr_14232_14257 = state_14216__$1;(statearr_14232_14257[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14217 === (14)))
{var inst_14209 = (state_14216[(2)]);var inst_14210 = cljs.core.async.close_BANG_.call(null,out);var state_14216__$1 = (function (){var statearr_14234 = state_14216;(statearr_14234[(13)] = inst_14209);
return statearr_14234;
})();var statearr_14235_14258 = state_14216__$1;(statearr_14235_14258[(2)] = inst_14210);
(statearr_14235_14258[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14217 === (10)))
{var inst_14199 = (state_14216[(2)]);var state_14216__$1 = state_14216;var statearr_14236_14259 = state_14216__$1;(statearr_14236_14259[(2)] = inst_14199);
(statearr_14236_14259[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14217 === (8)))
{var inst_14184 = (state_14216[(10)]);var inst_14180 = (state_14216[(9)]);var inst_14176 = (state_14216[(7)]);var inst_14189 = inst_14176.push(inst_14180);var tmp14233 = inst_14176;var inst_14176__$1 = tmp14233;var inst_14177 = inst_14184;var state_14216__$1 = (function (){var statearr_14237 = state_14216;(statearr_14237[(7)] = inst_14176__$1);
(statearr_14237[(14)] = inst_14189);
(statearr_14237[(8)] = inst_14177);
return statearr_14237;
})();var statearr_14238_14260 = state_14216__$1;(statearr_14238_14260[(2)] = null);
(statearr_14238_14260[(1)] = (2));
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
});})(c__6368__auto___14246,out))
;return ((function (switch__6353__auto__,c__6368__auto___14246,out){
return (function() {
var state_machine__6354__auto__ = null;
var state_machine__6354__auto____0 = (function (){var statearr_14242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14242[(0)] = state_machine__6354__auto__);
(statearr_14242[(1)] = (1));
return statearr_14242;
});
var state_machine__6354__auto____1 = (function (state_14216){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_14216);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e14243){if((e14243 instanceof Object))
{var ex__6357__auto__ = e14243;var statearr_14244_14261 = state_14216;(statearr_14244_14261[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14216);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14243;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14262 = state_14216;
state_14216 = G__14262;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_14216){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_14216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto___14246,out))
})();var state__6370__auto__ = (function (){var statearr_14245 = f__6369__auto__.call(null);(statearr_14245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto___14246);
return statearr_14245;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6370__auto__);
});})(c__6368__auto___14246,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
