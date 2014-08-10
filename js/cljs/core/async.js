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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t20175 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20175 = (function (f,fn_handler,meta20176){
this.f = f;
this.fn_handler = fn_handler;
this.meta20176 = meta20176;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20175.cljs$lang$type = true;
cljs.core.async.t20175.cljs$lang$ctorStr = "cljs.core.async/t20175";
cljs.core.async.t20175.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t20175");
});
cljs.core.async.t20175.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20175.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t20175.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t20175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20177){var self__ = this;
var _20177__$1 = this;return self__.meta20176;
});
cljs.core.async.t20175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20177,meta20176__$1){var self__ = this;
var _20177__$1 = this;return (new cljs.core.async.t20175(self__.f,self__.fn_handler,meta20176__$1));
});
cljs.core.async.__GT_t20175 = (function __GT_t20175(f__$1,fn_handler__$1,meta20176){return (new cljs.core.async.t20175(f__$1,fn_handler__$1,meta20176));
});
}
return (new cljs.core.async.t20175(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__20179 = buff;if(G__20179)
{var bit__4201__auto__ = null;if(cljs.core.truth_((function (){var or__3551__auto__ = bit__4201__auto__;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return G__20179.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__20179.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20179);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20179);
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
{var val_20180 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_20180);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_20180,ret){
return (function (){return fn1.call(null,val_20180);
});})(val_20180,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4407__auto___20181 = n;var x_20182 = (0);while(true){
if((x_20182 < n__4407__auto___20181))
{(a[x_20182] = (0));
{
var G__20183 = (x_20182 + (1));
x_20182 = G__20183;
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
var G__20184 = (i + (1));
i = G__20184;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t20188 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20188 = (function (flag,alt_flag,meta20189){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta20189 = meta20189;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20188.cljs$lang$type = true;
cljs.core.async.t20188.cljs$lang$ctorStr = "cljs.core.async/t20188";
cljs.core.async.t20188.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t20188");
});})(flag))
;
cljs.core.async.t20188.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20188.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t20188.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t20188.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20190){var self__ = this;
var _20190__$1 = this;return self__.meta20189;
});})(flag))
;
cljs.core.async.t20188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20190,meta20189__$1){var self__ = this;
var _20190__$1 = this;return (new cljs.core.async.t20188(self__.flag,self__.alt_flag,meta20189__$1));
});})(flag))
;
cljs.core.async.__GT_t20188 = ((function (flag){
return (function __GT_t20188(flag__$1,alt_flag__$1,meta20189){return (new cljs.core.async.t20188(flag__$1,alt_flag__$1,meta20189));
});})(flag))
;
}
return (new cljs.core.async.t20188(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t20194 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20194 = (function (cb,flag,alt_handler,meta20195){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta20195 = meta20195;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20194.cljs$lang$type = true;
cljs.core.async.t20194.cljs$lang$ctorStr = "cljs.core.async/t20194";
cljs.core.async.t20194.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t20194");
});
cljs.core.async.t20194.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20194.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t20194.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t20194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20196){var self__ = this;
var _20196__$1 = this;return self__.meta20195;
});
cljs.core.async.t20194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20196,meta20195__$1){var self__ = this;
var _20196__$1 = this;return (new cljs.core.async.t20194(self__.cb,self__.flag,self__.alt_handler,meta20195__$1));
});
cljs.core.async.__GT_t20194 = (function __GT_t20194(cb__$1,flag__$1,alt_handler__$1,meta20195){return (new cljs.core.async.t20194(cb__$1,flag__$1,alt_handler__$1,meta20195));
});
}
return (new cljs.core.async.t20194(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20197_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20197_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20198_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20198_SHARP_,port], null));
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
var G__20199 = (i + (1));
i = G__20199;
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
var alts_BANG___delegate = function (ports,p__20200){var map__20202 = p__20200;var map__20202__$1 = ((cljs.core.seq_QMARK_.call(null,map__20202))?cljs.core.apply.call(null,cljs.core.hash_map,map__20202):map__20202);var opts = map__20202__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__20200 = null;if (arguments.length > 1) {
  p__20200 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__20200);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__20203){
var ports = cljs.core.first(arglist__20203);
var p__20200 = cljs.core.rest(arglist__20203);
return alts_BANG___delegate(ports,p__20200);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t20211 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20211 = (function (ch,f,map_LT_,meta20212){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20212 = meta20212;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20211.cljs$lang$type = true;
cljs.core.async.t20211.cljs$lang$ctorStr = "cljs.core.async/t20211";
cljs.core.async.t20211.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t20211");
});
cljs.core.async.t20211.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20211.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t20211.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20211.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t20214 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20214 = (function (fn1,_,meta20212,ch,f,map_LT_,meta20215){
this.fn1 = fn1;
this._ = _;
this.meta20212 = meta20212;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20215 = meta20215;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20214.cljs$lang$type = true;
cljs.core.async.t20214.cljs$lang$ctorStr = "cljs.core.async/t20214";
cljs.core.async.t20214.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t20214");
});})(___$1))
;
cljs.core.async.t20214.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20214.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t20214.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t20214.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__20204_SHARP_){return f1.call(null,(((p1__20204_SHARP_ == null))?null:self__.f.call(null,p1__20204_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t20214.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20216){var self__ = this;
var _20216__$1 = this;return self__.meta20215;
});})(___$1))
;
cljs.core.async.t20214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20216,meta20215__$1){var self__ = this;
var _20216__$1 = this;return (new cljs.core.async.t20214(self__.fn1,self__._,self__.meta20212,self__.ch,self__.f,self__.map_LT_,meta20215__$1));
});})(___$1))
;
cljs.core.async.__GT_t20214 = ((function (___$1){
return (function __GT_t20214(fn1__$1,___$2,meta20212__$1,ch__$2,f__$2,map_LT___$2,meta20215){return (new cljs.core.async.t20214(fn1__$1,___$2,meta20212__$1,ch__$2,f__$2,map_LT___$2,meta20215));
});})(___$1))
;
}
return (new cljs.core.async.t20214(fn1,___$1,self__.meta20212,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t20211.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20211.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t20211.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t20211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20213){var self__ = this;
var _20213__$1 = this;return self__.meta20212;
});
cljs.core.async.t20211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20213,meta20212__$1){var self__ = this;
var _20213__$1 = this;return (new cljs.core.async.t20211(self__.ch,self__.f,self__.map_LT_,meta20212__$1));
});
cljs.core.async.__GT_t20211 = (function __GT_t20211(ch__$1,f__$1,map_LT___$1,meta20212){return (new cljs.core.async.t20211(ch__$1,f__$1,map_LT___$1,meta20212));
});
}
return (new cljs.core.async.t20211(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t20220 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20220 = (function (ch,f,map_GT_,meta20221){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta20221 = meta20221;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20220.cljs$lang$type = true;
cljs.core.async.t20220.cljs$lang$ctorStr = "cljs.core.async/t20220";
cljs.core.async.t20220.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t20220");
});
cljs.core.async.t20220.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20220.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t20220.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20220.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t20220.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20220.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t20220.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20222){var self__ = this;
var _20222__$1 = this;return self__.meta20221;
});
cljs.core.async.t20220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20222,meta20221__$1){var self__ = this;
var _20222__$1 = this;return (new cljs.core.async.t20220(self__.ch,self__.f,self__.map_GT_,meta20221__$1));
});
cljs.core.async.__GT_t20220 = (function __GT_t20220(ch__$1,f__$1,map_GT___$1,meta20221){return (new cljs.core.async.t20220(ch__$1,f__$1,map_GT___$1,meta20221));
});
}
return (new cljs.core.async.t20220(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t20226 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20226 = (function (ch,p,filter_GT_,meta20227){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta20227 = meta20227;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20226.cljs$lang$type = true;
cljs.core.async.t20226.cljs$lang$ctorStr = "cljs.core.async/t20226";
cljs.core.async.t20226.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t20226");
});
cljs.core.async.t20226.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20226.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t20226.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20226.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t20226.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20226.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t20226.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t20226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20228){var self__ = this;
var _20228__$1 = this;return self__.meta20227;
});
cljs.core.async.t20226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20228,meta20227__$1){var self__ = this;
var _20228__$1 = this;return (new cljs.core.async.t20226(self__.ch,self__.p,self__.filter_GT_,meta20227__$1));
});
cljs.core.async.__GT_t20226 = (function __GT_t20226(ch__$1,p__$1,filter_GT___$1,meta20227){return (new cljs.core.async.t20226(ch__$1,p__$1,filter_GT___$1,meta20227));
});
}
return (new cljs.core.async.t20226(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6368__auto___20311 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6368__auto___20311,out){
return (function (){var f__6369__auto__ = (function (){var switch__6353__auto__ = ((function (c__6368__auto___20311,out){
return (function (state_20290){var state_val_20291 = (state_20290[(1)]);if((state_val_20291 === (7)))
{var inst_20286 = (state_20290[(2)]);var state_20290__$1 = state_20290;var statearr_20292_20312 = state_20290__$1;(statearr_20292_20312[(2)] = inst_20286);
(statearr_20292_20312[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20291 === (1)))
{var state_20290__$1 = state_20290;var statearr_20293_20313 = state_20290__$1;(statearr_20293_20313[(2)] = null);
(statearr_20293_20313[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20291 === (4)))
{var inst_20272 = (state_20290[(7)]);var inst_20272__$1 = (state_20290[(2)]);var inst_20273 = (inst_20272__$1 == null);var state_20290__$1 = (function (){var statearr_20294 = state_20290;(statearr_20294[(7)] = inst_20272__$1);
return statearr_20294;
})();if(cljs.core.truth_(inst_20273))
{var statearr_20295_20314 = state_20290__$1;(statearr_20295_20314[(1)] = (5));
} else
{var statearr_20296_20315 = state_20290__$1;(statearr_20296_20315[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20291 === (6)))
{var inst_20272 = (state_20290[(7)]);var inst_20277 = p.call(null,inst_20272);var state_20290__$1 = state_20290;if(cljs.core.truth_(inst_20277))
{var statearr_20297_20316 = state_20290__$1;(statearr_20297_20316[(1)] = (8));
} else
{var statearr_20298_20317 = state_20290__$1;(statearr_20298_20317[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20291 === (3)))
{var inst_20288 = (state_20290[(2)]);var state_20290__$1 = state_20290;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20290__$1,inst_20288);
} else
{if((state_val_20291 === (2)))
{var state_20290__$1 = state_20290;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20290__$1,(4),ch);
} else
{if((state_val_20291 === (11)))
{var inst_20280 = (state_20290[(2)]);var state_20290__$1 = state_20290;var statearr_20299_20318 = state_20290__$1;(statearr_20299_20318[(2)] = inst_20280);
(statearr_20299_20318[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20291 === (9)))
{var state_20290__$1 = state_20290;var statearr_20300_20319 = state_20290__$1;(statearr_20300_20319[(2)] = null);
(statearr_20300_20319[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20291 === (5)))
{var inst_20275 = cljs.core.async.close_BANG_.call(null,out);var state_20290__$1 = state_20290;var statearr_20301_20320 = state_20290__$1;(statearr_20301_20320[(2)] = inst_20275);
(statearr_20301_20320[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20291 === (10)))
{var inst_20283 = (state_20290[(2)]);var state_20290__$1 = (function (){var statearr_20302 = state_20290;(statearr_20302[(8)] = inst_20283);
return statearr_20302;
})();var statearr_20303_20321 = state_20290__$1;(statearr_20303_20321[(2)] = null);
(statearr_20303_20321[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20291 === (8)))
{var inst_20272 = (state_20290[(7)]);var state_20290__$1 = state_20290;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20290__$1,(11),out,inst_20272);
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
});})(c__6368__auto___20311,out))
;return ((function (switch__6353__auto__,c__6368__auto___20311,out){
return (function() {
var state_machine__6354__auto__ = null;
var state_machine__6354__auto____0 = (function (){var statearr_20307 = [null,null,null,null,null,null,null,null,null];(statearr_20307[(0)] = state_machine__6354__auto__);
(statearr_20307[(1)] = (1));
return statearr_20307;
});
var state_machine__6354__auto____1 = (function (state_20290){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_20290);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e20308){if((e20308 instanceof Object))
{var ex__6357__auto__ = e20308;var statearr_20309_20322 = state_20290;(statearr_20309_20322[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20290);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20308;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20323 = state_20290;
state_20290 = G__20323;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_20290){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_20290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto___20311,out))
})();var state__6370__auto__ = (function (){var statearr_20310 = f__6369__auto__.call(null);(statearr_20310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto___20311);
return statearr_20310;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6370__auto__);
});})(c__6368__auto___20311,out))
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
return (function (state_20489){var state_val_20490 = (state_20489[(1)]);if((state_val_20490 === (7)))
{var inst_20485 = (state_20489[(2)]);var state_20489__$1 = state_20489;var statearr_20491_20532 = state_20489__$1;(statearr_20491_20532[(2)] = inst_20485);
(statearr_20491_20532[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20490 === (20)))
{var inst_20455 = (state_20489[(7)]);var inst_20466 = (state_20489[(2)]);var inst_20467 = cljs.core.next.call(null,inst_20455);var inst_20441 = inst_20467;var inst_20442 = null;var inst_20443 = (0);var inst_20444 = (0);var state_20489__$1 = (function (){var statearr_20492 = state_20489;(statearr_20492[(8)] = inst_20443);
(statearr_20492[(9)] = inst_20444);
(statearr_20492[(10)] = inst_20466);
(statearr_20492[(11)] = inst_20441);
(statearr_20492[(12)] = inst_20442);
return statearr_20492;
})();var statearr_20493_20533 = state_20489__$1;(statearr_20493_20533[(2)] = null);
(statearr_20493_20533[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20490 === (1)))
{var state_20489__$1 = state_20489;var statearr_20494_20534 = state_20489__$1;(statearr_20494_20534[(2)] = null);
(statearr_20494_20534[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20490 === (4)))
{var inst_20430 = (state_20489[(13)]);var inst_20430__$1 = (state_20489[(2)]);var inst_20431 = (inst_20430__$1 == null);var state_20489__$1 = (function (){var statearr_20495 = state_20489;(statearr_20495[(13)] = inst_20430__$1);
return statearr_20495;
})();if(cljs.core.truth_(inst_20431))
{var statearr_20496_20535 = state_20489__$1;(statearr_20496_20535[(1)] = (5));
} else
{var statearr_20497_20536 = state_20489__$1;(statearr_20497_20536[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20490 === (15)))
{var state_20489__$1 = state_20489;var statearr_20501_20537 = state_20489__$1;(statearr_20501_20537[(2)] = null);
(statearr_20501_20537[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20490 === (21)))
{var state_20489__$1 = state_20489;var statearr_20502_20538 = state_20489__$1;(statearr_20502_20538[(2)] = null);
(statearr_20502_20538[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20490 === (13)))
{var inst_20443 = (state_20489[(8)]);var inst_20444 = (state_20489[(9)]);var inst_20441 = (state_20489[(11)]);var inst_20442 = (state_20489[(12)]);var inst_20451 = (state_20489[(2)]);var inst_20452 = (inst_20444 + (1));var tmp20498 = inst_20443;var tmp20499 = inst_20441;var tmp20500 = inst_20442;var inst_20441__$1 = tmp20499;var inst_20442__$1 = tmp20500;var inst_20443__$1 = tmp20498;var inst_20444__$1 = inst_20452;var state_20489__$1 = (function (){var statearr_20503 = state_20489;(statearr_20503[(14)] = inst_20451);
(statearr_20503[(8)] = inst_20443__$1);
(statearr_20503[(9)] = inst_20444__$1);
(statearr_20503[(11)] = inst_20441__$1);
(statearr_20503[(12)] = inst_20442__$1);
return statearr_20503;
})();var statearr_20504_20539 = state_20489__$1;(statearr_20504_20539[(2)] = null);
(statearr_20504_20539[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20490 === (22)))
{var state_20489__$1 = state_20489;var statearr_20505_20540 = state_20489__$1;(statearr_20505_20540[(2)] = null);
(statearr_20505_20540[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20490 === (6)))
{var inst_20430 = (state_20489[(13)]);var inst_20439 = f.call(null,inst_20430);var inst_20440 = cljs.core.seq.call(null,inst_20439);var inst_20441 = inst_20440;var inst_20442 = null;var inst_20443 = (0);var inst_20444 = (0);var state_20489__$1 = (function (){var statearr_20506 = state_20489;(statearr_20506[(8)] = inst_20443);
(statearr_20506[(9)] = inst_20444);
(statearr_20506[(11)] = inst_20441);
(statearr_20506[(12)] = inst_20442);
return statearr_20506;
})();var statearr_20507_20541 = state_20489__$1;(statearr_20507_20541[(2)] = null);
(statearr_20507_20541[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20490 === (17)))
{var inst_20455 = (state_20489[(7)]);var inst_20459 = cljs.core.chunk_first.call(null,inst_20455);var inst_20460 = cljs.core.chunk_rest.call(null,inst_20455);var inst_20461 = cljs.core.count.call(null,inst_20459);var inst_20441 = inst_20460;var inst_20442 = inst_20459;var inst_20443 = inst_20461;var inst_20444 = (0);var state_20489__$1 = (function (){var statearr_20508 = state_20489;(statearr_20508[(8)] = inst_20443);
(statearr_20508[(9)] = inst_20444);
(statearr_20508[(11)] = inst_20441);
(statearr_20508[(12)] = inst_20442);
return statearr_20508;
})();var statearr_20509_20542 = state_20489__$1;(statearr_20509_20542[(2)] = null);
(statearr_20509_20542[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20490 === (3)))
{var inst_20487 = (state_20489[(2)]);var state_20489__$1 = state_20489;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20489__$1,inst_20487);
} else
{if((state_val_20490 === (12)))
{var inst_20475 = (state_20489[(2)]);var state_20489__$1 = state_20489;var statearr_20510_20543 = state_20489__$1;(statearr_20510_20543[(2)] = inst_20475);
(statearr_20510_20543[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20490 === (2)))
{var state_20489__$1 = state_20489;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20489__$1,(4),in$);
} else
{if((state_val_20490 === (23)))
{var inst_20483 = (state_20489[(2)]);var state_20489__$1 = state_20489;var statearr_20511_20544 = state_20489__$1;(statearr_20511_20544[(2)] = inst_20483);
(statearr_20511_20544[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20490 === (19)))
{var inst_20470 = (state_20489[(2)]);var state_20489__$1 = state_20489;var statearr_20512_20545 = state_20489__$1;(statearr_20512_20545[(2)] = inst_20470);
(statearr_20512_20545[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20490 === (11)))
{var inst_20455 = (state_20489[(7)]);var inst_20441 = (state_20489[(11)]);var inst_20455__$1 = cljs.core.seq.call(null,inst_20441);var state_20489__$1 = (function (){var statearr_20513 = state_20489;(statearr_20513[(7)] = inst_20455__$1);
return statearr_20513;
})();if(inst_20455__$1)
{var statearr_20514_20546 = state_20489__$1;(statearr_20514_20546[(1)] = (14));
} else
{var statearr_20515_20547 = state_20489__$1;(statearr_20515_20547[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20490 === (9)))
{var inst_20477 = (state_20489[(2)]);var inst_20478 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_20489__$1 = (function (){var statearr_20516 = state_20489;(statearr_20516[(15)] = inst_20477);
return statearr_20516;
})();if(cljs.core.truth_(inst_20478))
{var statearr_20517_20548 = state_20489__$1;(statearr_20517_20548[(1)] = (21));
} else
{var statearr_20518_20549 = state_20489__$1;(statearr_20518_20549[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20490 === (5)))
{var inst_20433 = cljs.core.async.close_BANG_.call(null,out);var state_20489__$1 = state_20489;var statearr_20519_20550 = state_20489__$1;(statearr_20519_20550[(2)] = inst_20433);
(statearr_20519_20550[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20490 === (14)))
{var inst_20455 = (state_20489[(7)]);var inst_20457 = cljs.core.chunked_seq_QMARK_.call(null,inst_20455);var state_20489__$1 = state_20489;if(inst_20457)
{var statearr_20520_20551 = state_20489__$1;(statearr_20520_20551[(1)] = (17));
} else
{var statearr_20521_20552 = state_20489__$1;(statearr_20521_20552[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20490 === (16)))
{var inst_20473 = (state_20489[(2)]);var state_20489__$1 = state_20489;var statearr_20522_20553 = state_20489__$1;(statearr_20522_20553[(2)] = inst_20473);
(statearr_20522_20553[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20490 === (10)))
{var inst_20444 = (state_20489[(9)]);var inst_20442 = (state_20489[(12)]);var inst_20449 = cljs.core._nth.call(null,inst_20442,inst_20444);var state_20489__$1 = state_20489;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20489__$1,(13),out,inst_20449);
} else
{if((state_val_20490 === (18)))
{var inst_20455 = (state_20489[(7)]);var inst_20464 = cljs.core.first.call(null,inst_20455);var state_20489__$1 = state_20489;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20489__$1,(20),out,inst_20464);
} else
{if((state_val_20490 === (8)))
{var inst_20443 = (state_20489[(8)]);var inst_20444 = (state_20489[(9)]);var inst_20446 = (inst_20444 < inst_20443);var inst_20447 = inst_20446;var state_20489__$1 = state_20489;if(cljs.core.truth_(inst_20447))
{var statearr_20523_20554 = state_20489__$1;(statearr_20523_20554[(1)] = (10));
} else
{var statearr_20524_20555 = state_20489__$1;(statearr_20524_20555[(1)] = (11));
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
var state_machine__6354__auto____0 = (function (){var statearr_20528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20528[(0)] = state_machine__6354__auto__);
(statearr_20528[(1)] = (1));
return statearr_20528;
});
var state_machine__6354__auto____1 = (function (state_20489){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_20489);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e20529){if((e20529 instanceof Object))
{var ex__6357__auto__ = e20529;var statearr_20530_20556 = state_20489;(statearr_20530_20556[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20489);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20529;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20557 = state_20489;
state_20489 = G__20557;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_20489){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_20489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto__))
})();var state__6370__auto__ = (function (){var statearr_20531 = f__6369__auto__.call(null);(statearr_20531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto__);
return statearr_20531;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6368__auto___20652 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6368__auto___20652){
return (function (){var f__6369__auto__ = (function (){var switch__6353__auto__ = ((function (c__6368__auto___20652){
return (function (state_20628){var state_val_20629 = (state_20628[(1)]);if((state_val_20629 === (7)))
{var inst_20624 = (state_20628[(2)]);var state_20628__$1 = state_20628;var statearr_20630_20653 = state_20628__$1;(statearr_20630_20653[(2)] = inst_20624);
(statearr_20630_20653[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20629 === (1)))
{var state_20628__$1 = state_20628;var statearr_20631_20654 = state_20628__$1;(statearr_20631_20654[(2)] = null);
(statearr_20631_20654[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20629 === (4)))
{var inst_20607 = (state_20628[(7)]);var inst_20607__$1 = (state_20628[(2)]);var inst_20608 = (inst_20607__$1 == null);var state_20628__$1 = (function (){var statearr_20632 = state_20628;(statearr_20632[(7)] = inst_20607__$1);
return statearr_20632;
})();if(cljs.core.truth_(inst_20608))
{var statearr_20633_20655 = state_20628__$1;(statearr_20633_20655[(1)] = (5));
} else
{var statearr_20634_20656 = state_20628__$1;(statearr_20634_20656[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20629 === (13)))
{var state_20628__$1 = state_20628;var statearr_20635_20657 = state_20628__$1;(statearr_20635_20657[(2)] = null);
(statearr_20635_20657[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20629 === (6)))
{var inst_20607 = (state_20628[(7)]);var state_20628__$1 = state_20628;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20628__$1,(11),to,inst_20607);
} else
{if((state_val_20629 === (3)))
{var inst_20626 = (state_20628[(2)]);var state_20628__$1 = state_20628;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20628__$1,inst_20626);
} else
{if((state_val_20629 === (12)))
{var state_20628__$1 = state_20628;var statearr_20636_20658 = state_20628__$1;(statearr_20636_20658[(2)] = null);
(statearr_20636_20658[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20629 === (2)))
{var state_20628__$1 = state_20628;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20628__$1,(4),from);
} else
{if((state_val_20629 === (11)))
{var inst_20617 = (state_20628[(2)]);var state_20628__$1 = state_20628;if(cljs.core.truth_(inst_20617))
{var statearr_20637_20659 = state_20628__$1;(statearr_20637_20659[(1)] = (12));
} else
{var statearr_20638_20660 = state_20628__$1;(statearr_20638_20660[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20629 === (9)))
{var state_20628__$1 = state_20628;var statearr_20639_20661 = state_20628__$1;(statearr_20639_20661[(2)] = null);
(statearr_20639_20661[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20629 === (5)))
{var state_20628__$1 = state_20628;if(cljs.core.truth_(close_QMARK_))
{var statearr_20640_20662 = state_20628__$1;(statearr_20640_20662[(1)] = (8));
} else
{var statearr_20641_20663 = state_20628__$1;(statearr_20641_20663[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20629 === (14)))
{var inst_20622 = (state_20628[(2)]);var state_20628__$1 = state_20628;var statearr_20642_20664 = state_20628__$1;(statearr_20642_20664[(2)] = inst_20622);
(statearr_20642_20664[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20629 === (10)))
{var inst_20614 = (state_20628[(2)]);var state_20628__$1 = state_20628;var statearr_20643_20665 = state_20628__$1;(statearr_20643_20665[(2)] = inst_20614);
(statearr_20643_20665[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20629 === (8)))
{var inst_20611 = cljs.core.async.close_BANG_.call(null,to);var state_20628__$1 = state_20628;var statearr_20644_20666 = state_20628__$1;(statearr_20644_20666[(2)] = inst_20611);
(statearr_20644_20666[(1)] = (10));
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
});})(c__6368__auto___20652))
;return ((function (switch__6353__auto__,c__6368__auto___20652){
return (function() {
var state_machine__6354__auto__ = null;
var state_machine__6354__auto____0 = (function (){var statearr_20648 = [null,null,null,null,null,null,null,null];(statearr_20648[(0)] = state_machine__6354__auto__);
(statearr_20648[(1)] = (1));
return statearr_20648;
});
var state_machine__6354__auto____1 = (function (state_20628){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_20628);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e20649){if((e20649 instanceof Object))
{var ex__6357__auto__ = e20649;var statearr_20650_20667 = state_20628;(statearr_20650_20667[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20628);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20649;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20668 = state_20628;
state_20628 = G__20668;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_20628){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_20628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto___20652))
})();var state__6370__auto__ = (function (){var statearr_20651 = f__6369__auto__.call(null);(statearr_20651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto___20652);
return statearr_20651;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6370__auto__);
});})(c__6368__auto___20652))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6368__auto___20769 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6368__auto___20769,tc,fc){
return (function (){var f__6369__auto__ = (function (){var switch__6353__auto__ = ((function (c__6368__auto___20769,tc,fc){
return (function (state_20744){var state_val_20745 = (state_20744[(1)]);if((state_val_20745 === (7)))
{var inst_20740 = (state_20744[(2)]);var state_20744__$1 = state_20744;var statearr_20746_20770 = state_20744__$1;(statearr_20746_20770[(2)] = inst_20740);
(statearr_20746_20770[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20745 === (1)))
{var state_20744__$1 = state_20744;var statearr_20747_20771 = state_20744__$1;(statearr_20747_20771[(2)] = null);
(statearr_20747_20771[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20745 === (4)))
{var inst_20721 = (state_20744[(7)]);var inst_20721__$1 = (state_20744[(2)]);var inst_20722 = (inst_20721__$1 == null);var state_20744__$1 = (function (){var statearr_20748 = state_20744;(statearr_20748[(7)] = inst_20721__$1);
return statearr_20748;
})();if(cljs.core.truth_(inst_20722))
{var statearr_20749_20772 = state_20744__$1;(statearr_20749_20772[(1)] = (5));
} else
{var statearr_20750_20773 = state_20744__$1;(statearr_20750_20773[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20745 === (13)))
{var state_20744__$1 = state_20744;var statearr_20751_20774 = state_20744__$1;(statearr_20751_20774[(2)] = null);
(statearr_20751_20774[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20745 === (6)))
{var inst_20721 = (state_20744[(7)]);var inst_20727 = p.call(null,inst_20721);var state_20744__$1 = state_20744;if(cljs.core.truth_(inst_20727))
{var statearr_20752_20775 = state_20744__$1;(statearr_20752_20775[(1)] = (9));
} else
{var statearr_20753_20776 = state_20744__$1;(statearr_20753_20776[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20745 === (3)))
{var inst_20742 = (state_20744[(2)]);var state_20744__$1 = state_20744;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20744__$1,inst_20742);
} else
{if((state_val_20745 === (12)))
{var state_20744__$1 = state_20744;var statearr_20754_20777 = state_20744__$1;(statearr_20754_20777[(2)] = null);
(statearr_20754_20777[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20745 === (2)))
{var state_20744__$1 = state_20744;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20744__$1,(4),ch);
} else
{if((state_val_20745 === (11)))
{var inst_20721 = (state_20744[(7)]);var inst_20731 = (state_20744[(2)]);var state_20744__$1 = state_20744;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20744__$1,(8),inst_20731,inst_20721);
} else
{if((state_val_20745 === (9)))
{var state_20744__$1 = state_20744;var statearr_20755_20778 = state_20744__$1;(statearr_20755_20778[(2)] = tc);
(statearr_20755_20778[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20745 === (5)))
{var inst_20724 = cljs.core.async.close_BANG_.call(null,tc);var inst_20725 = cljs.core.async.close_BANG_.call(null,fc);var state_20744__$1 = (function (){var statearr_20756 = state_20744;(statearr_20756[(8)] = inst_20724);
return statearr_20756;
})();var statearr_20757_20779 = state_20744__$1;(statearr_20757_20779[(2)] = inst_20725);
(statearr_20757_20779[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20745 === (14)))
{var inst_20738 = (state_20744[(2)]);var state_20744__$1 = state_20744;var statearr_20758_20780 = state_20744__$1;(statearr_20758_20780[(2)] = inst_20738);
(statearr_20758_20780[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20745 === (10)))
{var state_20744__$1 = state_20744;var statearr_20759_20781 = state_20744__$1;(statearr_20759_20781[(2)] = fc);
(statearr_20759_20781[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20745 === (8)))
{var inst_20733 = (state_20744[(2)]);var state_20744__$1 = state_20744;if(cljs.core.truth_(inst_20733))
{var statearr_20760_20782 = state_20744__$1;(statearr_20760_20782[(1)] = (12));
} else
{var statearr_20761_20783 = state_20744__$1;(statearr_20761_20783[(1)] = (13));
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
});})(c__6368__auto___20769,tc,fc))
;return ((function (switch__6353__auto__,c__6368__auto___20769,tc,fc){
return (function() {
var state_machine__6354__auto__ = null;
var state_machine__6354__auto____0 = (function (){var statearr_20765 = [null,null,null,null,null,null,null,null,null];(statearr_20765[(0)] = state_machine__6354__auto__);
(statearr_20765[(1)] = (1));
return statearr_20765;
});
var state_machine__6354__auto____1 = (function (state_20744){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_20744);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e20766){if((e20766 instanceof Object))
{var ex__6357__auto__ = e20766;var statearr_20767_20784 = state_20744;(statearr_20767_20784[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20744);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20766;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20785 = state_20744;
state_20744 = G__20785;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_20744){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_20744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto___20769,tc,fc))
})();var state__6370__auto__ = (function (){var statearr_20768 = f__6369__auto__.call(null);(statearr_20768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto___20769);
return statearr_20768;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6370__auto__);
});})(c__6368__auto___20769,tc,fc))
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
return (function (state_20832){var state_val_20833 = (state_20832[(1)]);if((state_val_20833 === (7)))
{var inst_20828 = (state_20832[(2)]);var state_20832__$1 = state_20832;var statearr_20834_20850 = state_20832__$1;(statearr_20834_20850[(2)] = inst_20828);
(statearr_20834_20850[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20833 === (6)))
{var inst_20818 = (state_20832[(7)]);var inst_20821 = (state_20832[(8)]);var inst_20825 = f.call(null,inst_20818,inst_20821);var inst_20818__$1 = inst_20825;var state_20832__$1 = (function (){var statearr_20835 = state_20832;(statearr_20835[(7)] = inst_20818__$1);
return statearr_20835;
})();var statearr_20836_20851 = state_20832__$1;(statearr_20836_20851[(2)] = null);
(statearr_20836_20851[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20833 === (5)))
{var inst_20818 = (state_20832[(7)]);var state_20832__$1 = state_20832;var statearr_20837_20852 = state_20832__$1;(statearr_20837_20852[(2)] = inst_20818);
(statearr_20837_20852[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20833 === (4)))
{var inst_20821 = (state_20832[(8)]);var inst_20821__$1 = (state_20832[(2)]);var inst_20822 = (inst_20821__$1 == null);var state_20832__$1 = (function (){var statearr_20838 = state_20832;(statearr_20838[(8)] = inst_20821__$1);
return statearr_20838;
})();if(cljs.core.truth_(inst_20822))
{var statearr_20839_20853 = state_20832__$1;(statearr_20839_20853[(1)] = (5));
} else
{var statearr_20840_20854 = state_20832__$1;(statearr_20840_20854[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20833 === (3)))
{var inst_20830 = (state_20832[(2)]);var state_20832__$1 = state_20832;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20832__$1,inst_20830);
} else
{if((state_val_20833 === (2)))
{var state_20832__$1 = state_20832;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20832__$1,(4),ch);
} else
{if((state_val_20833 === (1)))
{var inst_20818 = init;var state_20832__$1 = (function (){var statearr_20841 = state_20832;(statearr_20841[(7)] = inst_20818);
return statearr_20841;
})();var statearr_20842_20855 = state_20832__$1;(statearr_20842_20855[(2)] = null);
(statearr_20842_20855[(1)] = (2));
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
var state_machine__6354__auto____0 = (function (){var statearr_20846 = [null,null,null,null,null,null,null,null,null];(statearr_20846[(0)] = state_machine__6354__auto__);
(statearr_20846[(1)] = (1));
return statearr_20846;
});
var state_machine__6354__auto____1 = (function (state_20832){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_20832);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e20847){if((e20847 instanceof Object))
{var ex__6357__auto__ = e20847;var statearr_20848_20856 = state_20832;(statearr_20848_20856[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20832);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20847;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20857 = state_20832;
state_20832 = G__20857;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_20832){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_20832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto__))
})();var state__6370__auto__ = (function (){var statearr_20849 = f__6369__auto__.call(null);(statearr_20849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto__);
return statearr_20849;
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
return (function (state_20931){var state_val_20932 = (state_20931[(1)]);if((state_val_20932 === (7)))
{var inst_20913 = (state_20931[(2)]);var state_20931__$1 = state_20931;var statearr_20933_20956 = state_20931__$1;(statearr_20933_20956[(2)] = inst_20913);
(statearr_20933_20956[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20932 === (1)))
{var inst_20907 = cljs.core.seq.call(null,coll);var inst_20908 = inst_20907;var state_20931__$1 = (function (){var statearr_20934 = state_20931;(statearr_20934[(7)] = inst_20908);
return statearr_20934;
})();var statearr_20935_20957 = state_20931__$1;(statearr_20935_20957[(2)] = null);
(statearr_20935_20957[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20932 === (4)))
{var inst_20908 = (state_20931[(7)]);var inst_20911 = cljs.core.first.call(null,inst_20908);var state_20931__$1 = state_20931;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20931__$1,(7),ch,inst_20911);
} else
{if((state_val_20932 === (13)))
{var inst_20925 = (state_20931[(2)]);var state_20931__$1 = state_20931;var statearr_20936_20958 = state_20931__$1;(statearr_20936_20958[(2)] = inst_20925);
(statearr_20936_20958[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20932 === (6)))
{var inst_20916 = (state_20931[(2)]);var state_20931__$1 = state_20931;if(cljs.core.truth_(inst_20916))
{var statearr_20937_20959 = state_20931__$1;(statearr_20937_20959[(1)] = (8));
} else
{var statearr_20938_20960 = state_20931__$1;(statearr_20938_20960[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20932 === (3)))
{var inst_20929 = (state_20931[(2)]);var state_20931__$1 = state_20931;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20931__$1,inst_20929);
} else
{if((state_val_20932 === (12)))
{var state_20931__$1 = state_20931;var statearr_20939_20961 = state_20931__$1;(statearr_20939_20961[(2)] = null);
(statearr_20939_20961[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20932 === (2)))
{var inst_20908 = (state_20931[(7)]);var state_20931__$1 = state_20931;if(cljs.core.truth_(inst_20908))
{var statearr_20940_20962 = state_20931__$1;(statearr_20940_20962[(1)] = (4));
} else
{var statearr_20941_20963 = state_20931__$1;(statearr_20941_20963[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20932 === (11)))
{var inst_20922 = cljs.core.async.close_BANG_.call(null,ch);var state_20931__$1 = state_20931;var statearr_20942_20964 = state_20931__$1;(statearr_20942_20964[(2)] = inst_20922);
(statearr_20942_20964[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20932 === (9)))
{var state_20931__$1 = state_20931;if(cljs.core.truth_(close_QMARK_))
{var statearr_20943_20965 = state_20931__$1;(statearr_20943_20965[(1)] = (11));
} else
{var statearr_20944_20966 = state_20931__$1;(statearr_20944_20966[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20932 === (5)))
{var inst_20908 = (state_20931[(7)]);var state_20931__$1 = state_20931;var statearr_20945_20967 = state_20931__$1;(statearr_20945_20967[(2)] = inst_20908);
(statearr_20945_20967[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20932 === (10)))
{var inst_20927 = (state_20931[(2)]);var state_20931__$1 = state_20931;var statearr_20946_20968 = state_20931__$1;(statearr_20946_20968[(2)] = inst_20927);
(statearr_20946_20968[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20932 === (8)))
{var inst_20908 = (state_20931[(7)]);var inst_20918 = cljs.core.next.call(null,inst_20908);var inst_20908__$1 = inst_20918;var state_20931__$1 = (function (){var statearr_20947 = state_20931;(statearr_20947[(7)] = inst_20908__$1);
return statearr_20947;
})();var statearr_20948_20969 = state_20931__$1;(statearr_20948_20969[(2)] = null);
(statearr_20948_20969[(1)] = (2));
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
var state_machine__6354__auto____0 = (function (){var statearr_20952 = [null,null,null,null,null,null,null,null];(statearr_20952[(0)] = state_machine__6354__auto__);
(statearr_20952[(1)] = (1));
return statearr_20952;
});
var state_machine__6354__auto____1 = (function (state_20931){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_20931);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e20953){if((e20953 instanceof Object))
{var ex__6357__auto__ = e20953;var statearr_20954_20970 = state_20931;(statearr_20954_20970[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20931);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20953;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20971 = state_20931;
state_20931 = G__20971;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_20931){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_20931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto__))
})();var state__6370__auto__ = (function (){var statearr_20955 = f__6369__auto__.call(null);(statearr_20955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto__);
return statearr_20955;
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
cljs.core.async.Mux = (function (){var obj20973 = {};return obj20973;
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
cljs.core.async.Mult = (function (){var obj20975 = {};return obj20975;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t21197 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21197 = (function (cs,ch,mult,meta21198){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta21198 = meta21198;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21197.cljs$lang$type = true;
cljs.core.async.t21197.cljs$lang$ctorStr = "cljs.core.async/t21197";
cljs.core.async.t21197.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t21197");
});})(cs))
;
cljs.core.async.t21197.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t21197.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t21197.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t21197.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t21197.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21197.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t21197.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21199){var self__ = this;
var _21199__$1 = this;return self__.meta21198;
});})(cs))
;
cljs.core.async.t21197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21199,meta21198__$1){var self__ = this;
var _21199__$1 = this;return (new cljs.core.async.t21197(self__.cs,self__.ch,self__.mult,meta21198__$1));
});})(cs))
;
cljs.core.async.__GT_t21197 = ((function (cs){
return (function __GT_t21197(cs__$1,ch__$1,mult__$1,meta21198){return (new cljs.core.async.t21197(cs__$1,ch__$1,mult__$1,meta21198));
});})(cs))
;
}
return (new cljs.core.async.t21197(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6368__auto___21418 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6368__auto___21418,cs,m,dchan,dctr,done){
return (function (){var f__6369__auto__ = (function (){var switch__6353__auto__ = ((function (c__6368__auto___21418,cs,m,dchan,dctr,done){
return (function (state_21330){var state_val_21331 = (state_21330[(1)]);if((state_val_21331 === (7)))
{var inst_21326 = (state_21330[(2)]);var state_21330__$1 = state_21330;var statearr_21332_21419 = state_21330__$1;(statearr_21332_21419[(2)] = inst_21326);
(statearr_21332_21419[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (20)))
{var inst_21231 = (state_21330[(7)]);var inst_21241 = cljs.core.first.call(null,inst_21231);var inst_21242 = cljs.core.nth.call(null,inst_21241,(0),null);var inst_21243 = cljs.core.nth.call(null,inst_21241,(1),null);var state_21330__$1 = (function (){var statearr_21333 = state_21330;(statearr_21333[(8)] = inst_21242);
return statearr_21333;
})();if(cljs.core.truth_(inst_21243))
{var statearr_21334_21420 = state_21330__$1;(statearr_21334_21420[(1)] = (22));
} else
{var statearr_21335_21421 = state_21330__$1;(statearr_21335_21421[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (27)))
{var inst_21273 = (state_21330[(9)]);var inst_21202 = (state_21330[(10)]);var inst_21278 = (state_21330[(11)]);var inst_21271 = (state_21330[(12)]);var inst_21278__$1 = cljs.core._nth.call(null,inst_21271,inst_21273);var inst_21279 = cljs.core.async.put_BANG_.call(null,inst_21278__$1,inst_21202,done);var state_21330__$1 = (function (){var statearr_21336 = state_21330;(statearr_21336[(11)] = inst_21278__$1);
return statearr_21336;
})();if(cljs.core.truth_(inst_21279))
{var statearr_21337_21422 = state_21330__$1;(statearr_21337_21422[(1)] = (30));
} else
{var statearr_21338_21423 = state_21330__$1;(statearr_21338_21423[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (1)))
{var state_21330__$1 = state_21330;var statearr_21339_21424 = state_21330__$1;(statearr_21339_21424[(2)] = null);
(statearr_21339_21424[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (24)))
{var inst_21231 = (state_21330[(7)]);var inst_21248 = (state_21330[(2)]);var inst_21249 = cljs.core.next.call(null,inst_21231);var inst_21211 = inst_21249;var inst_21212 = null;var inst_21213 = (0);var inst_21214 = (0);var state_21330__$1 = (function (){var statearr_21340 = state_21330;(statearr_21340[(13)] = inst_21213);
(statearr_21340[(14)] = inst_21248);
(statearr_21340[(15)] = inst_21214);
(statearr_21340[(16)] = inst_21211);
(statearr_21340[(17)] = inst_21212);
return statearr_21340;
})();var statearr_21341_21425 = state_21330__$1;(statearr_21341_21425[(2)] = null);
(statearr_21341_21425[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (39)))
{var state_21330__$1 = state_21330;var statearr_21345_21426 = state_21330__$1;(statearr_21345_21426[(2)] = null);
(statearr_21345_21426[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (4)))
{var inst_21202 = (state_21330[(10)]);var inst_21202__$1 = (state_21330[(2)]);var inst_21203 = (inst_21202__$1 == null);var state_21330__$1 = (function (){var statearr_21346 = state_21330;(statearr_21346[(10)] = inst_21202__$1);
return statearr_21346;
})();if(cljs.core.truth_(inst_21203))
{var statearr_21347_21427 = state_21330__$1;(statearr_21347_21427[(1)] = (5));
} else
{var statearr_21348_21428 = state_21330__$1;(statearr_21348_21428[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (15)))
{var inst_21213 = (state_21330[(13)]);var inst_21214 = (state_21330[(15)]);var inst_21211 = (state_21330[(16)]);var inst_21212 = (state_21330[(17)]);var inst_21227 = (state_21330[(2)]);var inst_21228 = (inst_21214 + (1));var tmp21342 = inst_21213;var tmp21343 = inst_21211;var tmp21344 = inst_21212;var inst_21211__$1 = tmp21343;var inst_21212__$1 = tmp21344;var inst_21213__$1 = tmp21342;var inst_21214__$1 = inst_21228;var state_21330__$1 = (function (){var statearr_21349 = state_21330;(statearr_21349[(13)] = inst_21213__$1);
(statearr_21349[(15)] = inst_21214__$1);
(statearr_21349[(16)] = inst_21211__$1);
(statearr_21349[(17)] = inst_21212__$1);
(statearr_21349[(18)] = inst_21227);
return statearr_21349;
})();var statearr_21350_21429 = state_21330__$1;(statearr_21350_21429[(2)] = null);
(statearr_21350_21429[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (21)))
{var inst_21252 = (state_21330[(2)]);var state_21330__$1 = state_21330;var statearr_21354_21430 = state_21330__$1;(statearr_21354_21430[(2)] = inst_21252);
(statearr_21354_21430[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (31)))
{var inst_21278 = (state_21330[(11)]);var inst_21282 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_21283 = cljs.core.async.untap_STAR_.call(null,m,inst_21278);var state_21330__$1 = (function (){var statearr_21355 = state_21330;(statearr_21355[(19)] = inst_21282);
return statearr_21355;
})();var statearr_21356_21431 = state_21330__$1;(statearr_21356_21431[(2)] = inst_21283);
(statearr_21356_21431[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (32)))
{var inst_21273 = (state_21330[(9)]);var inst_21270 = (state_21330[(20)]);var inst_21272 = (state_21330[(21)]);var inst_21271 = (state_21330[(12)]);var inst_21285 = (state_21330[(2)]);var inst_21286 = (inst_21273 + (1));var tmp21351 = inst_21270;var tmp21352 = inst_21272;var tmp21353 = inst_21271;var inst_21270__$1 = tmp21351;var inst_21271__$1 = tmp21353;var inst_21272__$1 = tmp21352;var inst_21273__$1 = inst_21286;var state_21330__$1 = (function (){var statearr_21357 = state_21330;(statearr_21357[(9)] = inst_21273__$1);
(statearr_21357[(20)] = inst_21270__$1);
(statearr_21357[(21)] = inst_21272__$1);
(statearr_21357[(22)] = inst_21285);
(statearr_21357[(12)] = inst_21271__$1);
return statearr_21357;
})();var statearr_21358_21432 = state_21330__$1;(statearr_21358_21432[(2)] = null);
(statearr_21358_21432[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (40)))
{var inst_21298 = (state_21330[(23)]);var inst_21302 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_21303 = cljs.core.async.untap_STAR_.call(null,m,inst_21298);var state_21330__$1 = (function (){var statearr_21359 = state_21330;(statearr_21359[(24)] = inst_21302);
return statearr_21359;
})();var statearr_21360_21433 = state_21330__$1;(statearr_21360_21433[(2)] = inst_21303);
(statearr_21360_21433[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (33)))
{var inst_21289 = (state_21330[(25)]);var inst_21291 = cljs.core.chunked_seq_QMARK_.call(null,inst_21289);var state_21330__$1 = state_21330;if(inst_21291)
{var statearr_21361_21434 = state_21330__$1;(statearr_21361_21434[(1)] = (36));
} else
{var statearr_21362_21435 = state_21330__$1;(statearr_21362_21435[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (13)))
{var inst_21221 = (state_21330[(26)]);var inst_21224 = cljs.core.async.close_BANG_.call(null,inst_21221);var state_21330__$1 = state_21330;var statearr_21363_21436 = state_21330__$1;(statearr_21363_21436[(2)] = inst_21224);
(statearr_21363_21436[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (22)))
{var inst_21242 = (state_21330[(8)]);var inst_21245 = cljs.core.async.close_BANG_.call(null,inst_21242);var state_21330__$1 = state_21330;var statearr_21364_21437 = state_21330__$1;(statearr_21364_21437[(2)] = inst_21245);
(statearr_21364_21437[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (36)))
{var inst_21289 = (state_21330[(25)]);var inst_21293 = cljs.core.chunk_first.call(null,inst_21289);var inst_21294 = cljs.core.chunk_rest.call(null,inst_21289);var inst_21295 = cljs.core.count.call(null,inst_21293);var inst_21270 = inst_21294;var inst_21271 = inst_21293;var inst_21272 = inst_21295;var inst_21273 = (0);var state_21330__$1 = (function (){var statearr_21365 = state_21330;(statearr_21365[(9)] = inst_21273);
(statearr_21365[(20)] = inst_21270);
(statearr_21365[(21)] = inst_21272);
(statearr_21365[(12)] = inst_21271);
return statearr_21365;
})();var statearr_21366_21438 = state_21330__$1;(statearr_21366_21438[(2)] = null);
(statearr_21366_21438[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (41)))
{var inst_21289 = (state_21330[(25)]);var inst_21305 = (state_21330[(2)]);var inst_21306 = cljs.core.next.call(null,inst_21289);var inst_21270 = inst_21306;var inst_21271 = null;var inst_21272 = (0);var inst_21273 = (0);var state_21330__$1 = (function (){var statearr_21367 = state_21330;(statearr_21367[(27)] = inst_21305);
(statearr_21367[(9)] = inst_21273);
(statearr_21367[(20)] = inst_21270);
(statearr_21367[(21)] = inst_21272);
(statearr_21367[(12)] = inst_21271);
return statearr_21367;
})();var statearr_21368_21439 = state_21330__$1;(statearr_21368_21439[(2)] = null);
(statearr_21368_21439[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (43)))
{var state_21330__$1 = state_21330;var statearr_21369_21440 = state_21330__$1;(statearr_21369_21440[(2)] = null);
(statearr_21369_21440[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (29)))
{var inst_21314 = (state_21330[(2)]);var state_21330__$1 = state_21330;var statearr_21370_21441 = state_21330__$1;(statearr_21370_21441[(2)] = inst_21314);
(statearr_21370_21441[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (44)))
{var inst_21323 = (state_21330[(2)]);var state_21330__$1 = (function (){var statearr_21371 = state_21330;(statearr_21371[(28)] = inst_21323);
return statearr_21371;
})();var statearr_21372_21442 = state_21330__$1;(statearr_21372_21442[(2)] = null);
(statearr_21372_21442[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (6)))
{var inst_21262 = (state_21330[(29)]);var inst_21261 = cljs.core.deref.call(null,cs);var inst_21262__$1 = cljs.core.keys.call(null,inst_21261);var inst_21263 = cljs.core.count.call(null,inst_21262__$1);var inst_21264 = cljs.core.reset_BANG_.call(null,dctr,inst_21263);var inst_21269 = cljs.core.seq.call(null,inst_21262__$1);var inst_21270 = inst_21269;var inst_21271 = null;var inst_21272 = (0);var inst_21273 = (0);var state_21330__$1 = (function (){var statearr_21373 = state_21330;(statearr_21373[(9)] = inst_21273);
(statearr_21373[(20)] = inst_21270);
(statearr_21373[(29)] = inst_21262__$1);
(statearr_21373[(21)] = inst_21272);
(statearr_21373[(12)] = inst_21271);
(statearr_21373[(30)] = inst_21264);
return statearr_21373;
})();var statearr_21374_21443 = state_21330__$1;(statearr_21374_21443[(2)] = null);
(statearr_21374_21443[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (28)))
{var inst_21270 = (state_21330[(20)]);var inst_21289 = (state_21330[(25)]);var inst_21289__$1 = cljs.core.seq.call(null,inst_21270);var state_21330__$1 = (function (){var statearr_21375 = state_21330;(statearr_21375[(25)] = inst_21289__$1);
return statearr_21375;
})();if(inst_21289__$1)
{var statearr_21376_21444 = state_21330__$1;(statearr_21376_21444[(1)] = (33));
} else
{var statearr_21377_21445 = state_21330__$1;(statearr_21377_21445[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (25)))
{var inst_21273 = (state_21330[(9)]);var inst_21272 = (state_21330[(21)]);var inst_21275 = (inst_21273 < inst_21272);var inst_21276 = inst_21275;var state_21330__$1 = state_21330;if(cljs.core.truth_(inst_21276))
{var statearr_21378_21446 = state_21330__$1;(statearr_21378_21446[(1)] = (27));
} else
{var statearr_21379_21447 = state_21330__$1;(statearr_21379_21447[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (34)))
{var state_21330__$1 = state_21330;var statearr_21380_21448 = state_21330__$1;(statearr_21380_21448[(2)] = null);
(statearr_21380_21448[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (17)))
{var state_21330__$1 = state_21330;var statearr_21381_21449 = state_21330__$1;(statearr_21381_21449[(2)] = null);
(statearr_21381_21449[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (3)))
{var inst_21328 = (state_21330[(2)]);var state_21330__$1 = state_21330;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21330__$1,inst_21328);
} else
{if((state_val_21331 === (12)))
{var inst_21257 = (state_21330[(2)]);var state_21330__$1 = state_21330;var statearr_21382_21450 = state_21330__$1;(statearr_21382_21450[(2)] = inst_21257);
(statearr_21382_21450[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (2)))
{var state_21330__$1 = state_21330;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21330__$1,(4),ch);
} else
{if((state_val_21331 === (23)))
{var state_21330__$1 = state_21330;var statearr_21383_21451 = state_21330__$1;(statearr_21383_21451[(2)] = null);
(statearr_21383_21451[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (35)))
{var inst_21312 = (state_21330[(2)]);var state_21330__$1 = state_21330;var statearr_21384_21452 = state_21330__$1;(statearr_21384_21452[(2)] = inst_21312);
(statearr_21384_21452[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (19)))
{var inst_21231 = (state_21330[(7)]);var inst_21235 = cljs.core.chunk_first.call(null,inst_21231);var inst_21236 = cljs.core.chunk_rest.call(null,inst_21231);var inst_21237 = cljs.core.count.call(null,inst_21235);var inst_21211 = inst_21236;var inst_21212 = inst_21235;var inst_21213 = inst_21237;var inst_21214 = (0);var state_21330__$1 = (function (){var statearr_21385 = state_21330;(statearr_21385[(13)] = inst_21213);
(statearr_21385[(15)] = inst_21214);
(statearr_21385[(16)] = inst_21211);
(statearr_21385[(17)] = inst_21212);
return statearr_21385;
})();var statearr_21386_21453 = state_21330__$1;(statearr_21386_21453[(2)] = null);
(statearr_21386_21453[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (11)))
{var inst_21211 = (state_21330[(16)]);var inst_21231 = (state_21330[(7)]);var inst_21231__$1 = cljs.core.seq.call(null,inst_21211);var state_21330__$1 = (function (){var statearr_21387 = state_21330;(statearr_21387[(7)] = inst_21231__$1);
return statearr_21387;
})();if(inst_21231__$1)
{var statearr_21388_21454 = state_21330__$1;(statearr_21388_21454[(1)] = (16));
} else
{var statearr_21389_21455 = state_21330__$1;(statearr_21389_21455[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (9)))
{var inst_21259 = (state_21330[(2)]);var state_21330__$1 = state_21330;var statearr_21390_21456 = state_21330__$1;(statearr_21390_21456[(2)] = inst_21259);
(statearr_21390_21456[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (5)))
{var inst_21209 = cljs.core.deref.call(null,cs);var inst_21210 = cljs.core.seq.call(null,inst_21209);var inst_21211 = inst_21210;var inst_21212 = null;var inst_21213 = (0);var inst_21214 = (0);var state_21330__$1 = (function (){var statearr_21391 = state_21330;(statearr_21391[(13)] = inst_21213);
(statearr_21391[(15)] = inst_21214);
(statearr_21391[(16)] = inst_21211);
(statearr_21391[(17)] = inst_21212);
return statearr_21391;
})();var statearr_21392_21457 = state_21330__$1;(statearr_21392_21457[(2)] = null);
(statearr_21392_21457[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (14)))
{var state_21330__$1 = state_21330;var statearr_21393_21458 = state_21330__$1;(statearr_21393_21458[(2)] = null);
(statearr_21393_21458[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (45)))
{var inst_21320 = (state_21330[(2)]);var state_21330__$1 = state_21330;var statearr_21394_21459 = state_21330__$1;(statearr_21394_21459[(2)] = inst_21320);
(statearr_21394_21459[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (26)))
{var inst_21262 = (state_21330[(29)]);var inst_21316 = (state_21330[(2)]);var inst_21317 = cljs.core.seq.call(null,inst_21262);var state_21330__$1 = (function (){var statearr_21395 = state_21330;(statearr_21395[(31)] = inst_21316);
return statearr_21395;
})();if(inst_21317)
{var statearr_21396_21460 = state_21330__$1;(statearr_21396_21460[(1)] = (42));
} else
{var statearr_21397_21461 = state_21330__$1;(statearr_21397_21461[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (16)))
{var inst_21231 = (state_21330[(7)]);var inst_21233 = cljs.core.chunked_seq_QMARK_.call(null,inst_21231);var state_21330__$1 = state_21330;if(inst_21233)
{var statearr_21398_21462 = state_21330__$1;(statearr_21398_21462[(1)] = (19));
} else
{var statearr_21399_21463 = state_21330__$1;(statearr_21399_21463[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (38)))
{var inst_21309 = (state_21330[(2)]);var state_21330__$1 = state_21330;var statearr_21400_21464 = state_21330__$1;(statearr_21400_21464[(2)] = inst_21309);
(statearr_21400_21464[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (30)))
{var state_21330__$1 = state_21330;var statearr_21401_21465 = state_21330__$1;(statearr_21401_21465[(2)] = null);
(statearr_21401_21465[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (10)))
{var inst_21214 = (state_21330[(15)]);var inst_21212 = (state_21330[(17)]);var inst_21220 = cljs.core._nth.call(null,inst_21212,inst_21214);var inst_21221 = cljs.core.nth.call(null,inst_21220,(0),null);var inst_21222 = cljs.core.nth.call(null,inst_21220,(1),null);var state_21330__$1 = (function (){var statearr_21402 = state_21330;(statearr_21402[(26)] = inst_21221);
return statearr_21402;
})();if(cljs.core.truth_(inst_21222))
{var statearr_21403_21466 = state_21330__$1;(statearr_21403_21466[(1)] = (13));
} else
{var statearr_21404_21467 = state_21330__$1;(statearr_21404_21467[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (18)))
{var inst_21255 = (state_21330[(2)]);var state_21330__$1 = state_21330;var statearr_21405_21468 = state_21330__$1;(statearr_21405_21468[(2)] = inst_21255);
(statearr_21405_21468[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (42)))
{var state_21330__$1 = state_21330;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21330__$1,(45),dchan);
} else
{if((state_val_21331 === (37)))
{var inst_21289 = (state_21330[(25)]);var inst_21202 = (state_21330[(10)]);var inst_21298 = (state_21330[(23)]);var inst_21298__$1 = cljs.core.first.call(null,inst_21289);var inst_21299 = cljs.core.async.put_BANG_.call(null,inst_21298__$1,inst_21202,done);var state_21330__$1 = (function (){var statearr_21406 = state_21330;(statearr_21406[(23)] = inst_21298__$1);
return statearr_21406;
})();if(cljs.core.truth_(inst_21299))
{var statearr_21407_21469 = state_21330__$1;(statearr_21407_21469[(1)] = (39));
} else
{var statearr_21408_21470 = state_21330__$1;(statearr_21408_21470[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21331 === (8)))
{var inst_21213 = (state_21330[(13)]);var inst_21214 = (state_21330[(15)]);var inst_21216 = (inst_21214 < inst_21213);var inst_21217 = inst_21216;var state_21330__$1 = state_21330;if(cljs.core.truth_(inst_21217))
{var statearr_21409_21471 = state_21330__$1;(statearr_21409_21471[(1)] = (10));
} else
{var statearr_21410_21472 = state_21330__$1;(statearr_21410_21472[(1)] = (11));
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
});})(c__6368__auto___21418,cs,m,dchan,dctr,done))
;return ((function (switch__6353__auto__,c__6368__auto___21418,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6354__auto__ = null;
var state_machine__6354__auto____0 = (function (){var statearr_21414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21414[(0)] = state_machine__6354__auto__);
(statearr_21414[(1)] = (1));
return statearr_21414;
});
var state_machine__6354__auto____1 = (function (state_21330){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_21330);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e21415){if((e21415 instanceof Object))
{var ex__6357__auto__ = e21415;var statearr_21416_21473 = state_21330;(statearr_21416_21473[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21330);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21415;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21474 = state_21330;
state_21330 = G__21474;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_21330){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_21330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto___21418,cs,m,dchan,dctr,done))
})();var state__6370__auto__ = (function (){var statearr_21417 = f__6369__auto__.call(null);(statearr_21417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto___21418);
return statearr_21417;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6370__auto__);
});})(c__6368__auto___21418,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj21476 = {};return obj21476;
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
;var m = (function (){if(typeof cljs.core.async.t21596 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21596 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21597){
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
this.meta21597 = meta21597;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21596.cljs$lang$type = true;
cljs.core.async.t21596.cljs$lang$ctorStr = "cljs.core.async/t21596";
cljs.core.async.t21596.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t21596");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21596.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t21596.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21596.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21596.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21596.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21596.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21596.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21596.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21596.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21598){var self__ = this;
var _21598__$1 = this;return self__.meta21597;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21598,meta21597__$1){var self__ = this;
var _21598__$1 = this;return (new cljs.core.async.t21596(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21597__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t21596 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t21596(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21597){return (new cljs.core.async.t21596(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21597));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t21596(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6368__auto___21715 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6368__auto___21715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6369__auto__ = (function (){var switch__6353__auto__ = ((function (c__6368__auto___21715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21668){var state_val_21669 = (state_21668[(1)]);if((state_val_21669 === (7)))
{var inst_21612 = (state_21668[(7)]);var inst_21617 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21612);var state_21668__$1 = state_21668;var statearr_21670_21716 = state_21668__$1;(statearr_21670_21716[(2)] = inst_21617);
(statearr_21670_21716[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21669 === (20)))
{var inst_21627 = (state_21668[(8)]);var state_21668__$1 = state_21668;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21668__$1,(23),out,inst_21627);
} else
{if((state_val_21669 === (1)))
{var inst_21602 = (state_21668[(9)]);var inst_21602__$1 = calc_state.call(null);var inst_21603 = cljs.core.seq_QMARK_.call(null,inst_21602__$1);var state_21668__$1 = (function (){var statearr_21671 = state_21668;(statearr_21671[(9)] = inst_21602__$1);
return statearr_21671;
})();if(inst_21603)
{var statearr_21672_21717 = state_21668__$1;(statearr_21672_21717[(1)] = (2));
} else
{var statearr_21673_21718 = state_21668__$1;(statearr_21673_21718[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21669 === (24)))
{var inst_21620 = (state_21668[(10)]);var inst_21612 = inst_21620;var state_21668__$1 = (function (){var statearr_21674 = state_21668;(statearr_21674[(7)] = inst_21612);
return statearr_21674;
})();var statearr_21675_21719 = state_21668__$1;(statearr_21675_21719[(2)] = null);
(statearr_21675_21719[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21669 === (4)))
{var inst_21602 = (state_21668[(9)]);var inst_21608 = (state_21668[(2)]);var inst_21609 = cljs.core.get.call(null,inst_21608,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_21610 = cljs.core.get.call(null,inst_21608,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_21611 = cljs.core.get.call(null,inst_21608,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_21612 = inst_21602;var state_21668__$1 = (function (){var statearr_21676 = state_21668;(statearr_21676[(7)] = inst_21612);
(statearr_21676[(11)] = inst_21609);
(statearr_21676[(12)] = inst_21611);
(statearr_21676[(13)] = inst_21610);
return statearr_21676;
})();var statearr_21677_21720 = state_21668__$1;(statearr_21677_21720[(2)] = null);
(statearr_21677_21720[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21669 === (15)))
{var state_21668__$1 = state_21668;var statearr_21678_21721 = state_21668__$1;(statearr_21678_21721[(2)] = null);
(statearr_21678_21721[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21669 === (21)))
{var inst_21620 = (state_21668[(10)]);var inst_21612 = inst_21620;var state_21668__$1 = (function (){var statearr_21679 = state_21668;(statearr_21679[(7)] = inst_21612);
return statearr_21679;
})();var statearr_21680_21722 = state_21668__$1;(statearr_21680_21722[(2)] = null);
(statearr_21680_21722[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21669 === (13)))
{var inst_21664 = (state_21668[(2)]);var state_21668__$1 = state_21668;var statearr_21681_21723 = state_21668__$1;(statearr_21681_21723[(2)] = inst_21664);
(statearr_21681_21723[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21669 === (22)))
{var inst_21662 = (state_21668[(2)]);var state_21668__$1 = state_21668;var statearr_21682_21724 = state_21668__$1;(statearr_21682_21724[(2)] = inst_21662);
(statearr_21682_21724[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21669 === (6)))
{var inst_21666 = (state_21668[(2)]);var state_21668__$1 = state_21668;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21668__$1,inst_21666);
} else
{if((state_val_21669 === (25)))
{var state_21668__$1 = state_21668;var statearr_21683_21725 = state_21668__$1;(statearr_21683_21725[(2)] = null);
(statearr_21683_21725[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21669 === (17)))
{var inst_21642 = (state_21668[(14)]);var state_21668__$1 = state_21668;var statearr_21684_21726 = state_21668__$1;(statearr_21684_21726[(2)] = inst_21642);
(statearr_21684_21726[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21669 === (3)))
{var inst_21602 = (state_21668[(9)]);var state_21668__$1 = state_21668;var statearr_21685_21727 = state_21668__$1;(statearr_21685_21727[(2)] = inst_21602);
(statearr_21685_21727[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21669 === (12)))
{var inst_21642 = (state_21668[(14)]);var inst_21623 = (state_21668[(15)]);var inst_21628 = (state_21668[(16)]);var inst_21642__$1 = inst_21623.call(null,inst_21628);var state_21668__$1 = (function (){var statearr_21686 = state_21668;(statearr_21686[(14)] = inst_21642__$1);
return statearr_21686;
})();if(cljs.core.truth_(inst_21642__$1))
{var statearr_21687_21728 = state_21668__$1;(statearr_21687_21728[(1)] = (17));
} else
{var statearr_21688_21729 = state_21668__$1;(statearr_21688_21729[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21669 === (2)))
{var inst_21602 = (state_21668[(9)]);var inst_21605 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21602);var state_21668__$1 = state_21668;var statearr_21689_21730 = state_21668__$1;(statearr_21689_21730[(2)] = inst_21605);
(statearr_21689_21730[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21669 === (23)))
{var inst_21653 = (state_21668[(2)]);var state_21668__$1 = state_21668;if(cljs.core.truth_(inst_21653))
{var statearr_21690_21731 = state_21668__$1;(statearr_21690_21731[(1)] = (24));
} else
{var statearr_21691_21732 = state_21668__$1;(statearr_21691_21732[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21669 === (19)))
{var inst_21650 = (state_21668[(2)]);var state_21668__$1 = state_21668;if(cljs.core.truth_(inst_21650))
{var statearr_21692_21733 = state_21668__$1;(statearr_21692_21733[(1)] = (20));
} else
{var statearr_21693_21734 = state_21668__$1;(statearr_21693_21734[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21669 === (11)))
{var inst_21627 = (state_21668[(8)]);var inst_21633 = (inst_21627 == null);var state_21668__$1 = state_21668;if(cljs.core.truth_(inst_21633))
{var statearr_21694_21735 = state_21668__$1;(statearr_21694_21735[(1)] = (14));
} else
{var statearr_21695_21736 = state_21668__$1;(statearr_21695_21736[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21669 === (9)))
{var inst_21620 = (state_21668[(10)]);var inst_21620__$1 = (state_21668[(2)]);var inst_21621 = cljs.core.get.call(null,inst_21620__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_21622 = cljs.core.get.call(null,inst_21620__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_21623 = cljs.core.get.call(null,inst_21620__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_21668__$1 = (function (){var statearr_21696 = state_21668;(statearr_21696[(10)] = inst_21620__$1);
(statearr_21696[(15)] = inst_21623);
(statearr_21696[(17)] = inst_21622);
return statearr_21696;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_21668__$1,(10),inst_21621);
} else
{if((state_val_21669 === (5)))
{var inst_21612 = (state_21668[(7)]);var inst_21615 = cljs.core.seq_QMARK_.call(null,inst_21612);var state_21668__$1 = state_21668;if(inst_21615)
{var statearr_21697_21737 = state_21668__$1;(statearr_21697_21737[(1)] = (7));
} else
{var statearr_21698_21738 = state_21668__$1;(statearr_21698_21738[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21669 === (14)))
{var inst_21628 = (state_21668[(16)]);var inst_21635 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21628);var state_21668__$1 = state_21668;var statearr_21699_21739 = state_21668__$1;(statearr_21699_21739[(2)] = inst_21635);
(statearr_21699_21739[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21669 === (26)))
{var inst_21658 = (state_21668[(2)]);var state_21668__$1 = state_21668;var statearr_21700_21740 = state_21668__$1;(statearr_21700_21740[(2)] = inst_21658);
(statearr_21700_21740[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21669 === (16)))
{var inst_21638 = (state_21668[(2)]);var inst_21639 = calc_state.call(null);var inst_21612 = inst_21639;var state_21668__$1 = (function (){var statearr_21701 = state_21668;(statearr_21701[(7)] = inst_21612);
(statearr_21701[(18)] = inst_21638);
return statearr_21701;
})();var statearr_21702_21741 = state_21668__$1;(statearr_21702_21741[(2)] = null);
(statearr_21702_21741[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21669 === (10)))
{var inst_21627 = (state_21668[(8)]);var inst_21628 = (state_21668[(16)]);var inst_21626 = (state_21668[(2)]);var inst_21627__$1 = cljs.core.nth.call(null,inst_21626,(0),null);var inst_21628__$1 = cljs.core.nth.call(null,inst_21626,(1),null);var inst_21629 = (inst_21627__$1 == null);var inst_21630 = cljs.core._EQ_.call(null,inst_21628__$1,change);var inst_21631 = (inst_21629) || (inst_21630);var state_21668__$1 = (function (){var statearr_21703 = state_21668;(statearr_21703[(8)] = inst_21627__$1);
(statearr_21703[(16)] = inst_21628__$1);
return statearr_21703;
})();if(cljs.core.truth_(inst_21631))
{var statearr_21704_21742 = state_21668__$1;(statearr_21704_21742[(1)] = (11));
} else
{var statearr_21705_21743 = state_21668__$1;(statearr_21705_21743[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21669 === (18)))
{var inst_21623 = (state_21668[(15)]);var inst_21628 = (state_21668[(16)]);var inst_21622 = (state_21668[(17)]);var inst_21645 = cljs.core.empty_QMARK_.call(null,inst_21623);var inst_21646 = inst_21622.call(null,inst_21628);var inst_21647 = cljs.core.not.call(null,inst_21646);var inst_21648 = (inst_21645) && (inst_21647);var state_21668__$1 = state_21668;var statearr_21706_21744 = state_21668__$1;(statearr_21706_21744[(2)] = inst_21648);
(statearr_21706_21744[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21669 === (8)))
{var inst_21612 = (state_21668[(7)]);var state_21668__$1 = state_21668;var statearr_21707_21745 = state_21668__$1;(statearr_21707_21745[(2)] = inst_21612);
(statearr_21707_21745[(1)] = (9));
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
});})(c__6368__auto___21715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6353__auto__,c__6368__auto___21715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6354__auto__ = null;
var state_machine__6354__auto____0 = (function (){var statearr_21711 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21711[(0)] = state_machine__6354__auto__);
(statearr_21711[(1)] = (1));
return statearr_21711;
});
var state_machine__6354__auto____1 = (function (state_21668){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_21668);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e21712){if((e21712 instanceof Object))
{var ex__6357__auto__ = e21712;var statearr_21713_21746 = state_21668;(statearr_21713_21746[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21668);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21712;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21747 = state_21668;
state_21668 = G__21747;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_21668){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_21668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto___21715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6370__auto__ = (function (){var statearr_21714 = f__6369__auto__.call(null);(statearr_21714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto___21715);
return statearr_21714;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6370__auto__);
});})(c__6368__auto___21715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj21749 = {};return obj21749;
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
return (function (p1__21750_SHARP_){if(cljs.core.truth_(p1__21750_SHARP_.call(null,topic)))
{return p1__21750_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__21750_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3551__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t21873 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21873 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta21874){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta21874 = meta21874;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21873.cljs$lang$type = true;
cljs.core.async.t21873.cljs$lang$ctorStr = "cljs.core.async/t21873";
cljs.core.async.t21873.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t21873");
});})(mults,ensure_mult))
;
cljs.core.async.t21873.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t21873.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t21873.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t21873.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t21873.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t21873.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21873.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t21873.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21875){var self__ = this;
var _21875__$1 = this;return self__.meta21874;
});})(mults,ensure_mult))
;
cljs.core.async.t21873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21875,meta21874__$1){var self__ = this;
var _21875__$1 = this;return (new cljs.core.async.t21873(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta21874__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t21873 = ((function (mults,ensure_mult){
return (function __GT_t21873(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21874){return (new cljs.core.async.t21873(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21874));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t21873(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6368__auto___21995 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6368__auto___21995,mults,ensure_mult,p){
return (function (){var f__6369__auto__ = (function (){var switch__6353__auto__ = ((function (c__6368__auto___21995,mults,ensure_mult,p){
return (function (state_21947){var state_val_21948 = (state_21947[(1)]);if((state_val_21948 === (7)))
{var inst_21943 = (state_21947[(2)]);var state_21947__$1 = state_21947;var statearr_21949_21996 = state_21947__$1;(statearr_21949_21996[(2)] = inst_21943);
(statearr_21949_21996[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21948 === (20)))
{var state_21947__$1 = state_21947;var statearr_21950_21997 = state_21947__$1;(statearr_21950_21997[(2)] = null);
(statearr_21950_21997[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21948 === (1)))
{var state_21947__$1 = state_21947;var statearr_21951_21998 = state_21947__$1;(statearr_21951_21998[(2)] = null);
(statearr_21951_21998[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21948 === (24)))
{var inst_21926 = (state_21947[(7)]);var inst_21935 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21926);var state_21947__$1 = state_21947;var statearr_21952_21999 = state_21947__$1;(statearr_21952_21999[(2)] = inst_21935);
(statearr_21952_21999[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21948 === (4)))
{var inst_21878 = (state_21947[(8)]);var inst_21878__$1 = (state_21947[(2)]);var inst_21879 = (inst_21878__$1 == null);var state_21947__$1 = (function (){var statearr_21953 = state_21947;(statearr_21953[(8)] = inst_21878__$1);
return statearr_21953;
})();if(cljs.core.truth_(inst_21879))
{var statearr_21954_22000 = state_21947__$1;(statearr_21954_22000[(1)] = (5));
} else
{var statearr_21955_22001 = state_21947__$1;(statearr_21955_22001[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21948 === (15)))
{var inst_21920 = (state_21947[(2)]);var state_21947__$1 = state_21947;var statearr_21956_22002 = state_21947__$1;(statearr_21956_22002[(2)] = inst_21920);
(statearr_21956_22002[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21948 === (21)))
{var inst_21940 = (state_21947[(2)]);var state_21947__$1 = (function (){var statearr_21957 = state_21947;(statearr_21957[(9)] = inst_21940);
return statearr_21957;
})();var statearr_21958_22003 = state_21947__$1;(statearr_21958_22003[(2)] = null);
(statearr_21958_22003[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21948 === (13)))
{var inst_21902 = (state_21947[(10)]);var inst_21904 = cljs.core.chunked_seq_QMARK_.call(null,inst_21902);var state_21947__$1 = state_21947;if(inst_21904)
{var statearr_21959_22004 = state_21947__$1;(statearr_21959_22004[(1)] = (16));
} else
{var statearr_21960_22005 = state_21947__$1;(statearr_21960_22005[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21948 === (22)))
{var inst_21932 = (state_21947[(2)]);var state_21947__$1 = state_21947;if(cljs.core.truth_(inst_21932))
{var statearr_21961_22006 = state_21947__$1;(statearr_21961_22006[(1)] = (23));
} else
{var statearr_21962_22007 = state_21947__$1;(statearr_21962_22007[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21948 === (6)))
{var inst_21926 = (state_21947[(7)]);var inst_21878 = (state_21947[(8)]);var inst_21928 = (state_21947[(11)]);var inst_21926__$1 = topic_fn.call(null,inst_21878);var inst_21927 = cljs.core.deref.call(null,mults);var inst_21928__$1 = cljs.core.get.call(null,inst_21927,inst_21926__$1);var state_21947__$1 = (function (){var statearr_21963 = state_21947;(statearr_21963[(7)] = inst_21926__$1);
(statearr_21963[(11)] = inst_21928__$1);
return statearr_21963;
})();if(cljs.core.truth_(inst_21928__$1))
{var statearr_21964_22008 = state_21947__$1;(statearr_21964_22008[(1)] = (19));
} else
{var statearr_21965_22009 = state_21947__$1;(statearr_21965_22009[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21948 === (25)))
{var inst_21937 = (state_21947[(2)]);var state_21947__$1 = state_21947;var statearr_21966_22010 = state_21947__$1;(statearr_21966_22010[(2)] = inst_21937);
(statearr_21966_22010[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21948 === (17)))
{var inst_21902 = (state_21947[(10)]);var inst_21911 = cljs.core.first.call(null,inst_21902);var inst_21912 = cljs.core.async.muxch_STAR_.call(null,inst_21911);var inst_21913 = cljs.core.async.close_BANG_.call(null,inst_21912);var inst_21914 = cljs.core.next.call(null,inst_21902);var inst_21888 = inst_21914;var inst_21889 = null;var inst_21890 = (0);var inst_21891 = (0);var state_21947__$1 = (function (){var statearr_21967 = state_21947;(statearr_21967[(12)] = inst_21888);
(statearr_21967[(13)] = inst_21913);
(statearr_21967[(14)] = inst_21891);
(statearr_21967[(15)] = inst_21889);
(statearr_21967[(16)] = inst_21890);
return statearr_21967;
})();var statearr_21968_22011 = state_21947__$1;(statearr_21968_22011[(2)] = null);
(statearr_21968_22011[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21948 === (3)))
{var inst_21945 = (state_21947[(2)]);var state_21947__$1 = state_21947;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21947__$1,inst_21945);
} else
{if((state_val_21948 === (12)))
{var inst_21922 = (state_21947[(2)]);var state_21947__$1 = state_21947;var statearr_21969_22012 = state_21947__$1;(statearr_21969_22012[(2)] = inst_21922);
(statearr_21969_22012[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21948 === (2)))
{var state_21947__$1 = state_21947;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21947__$1,(4),ch);
} else
{if((state_val_21948 === (23)))
{var state_21947__$1 = state_21947;var statearr_21970_22013 = state_21947__$1;(statearr_21970_22013[(2)] = null);
(statearr_21970_22013[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21948 === (19)))
{var inst_21878 = (state_21947[(8)]);var inst_21928 = (state_21947[(11)]);var inst_21930 = cljs.core.async.muxch_STAR_.call(null,inst_21928);var state_21947__$1 = state_21947;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21947__$1,(22),inst_21930,inst_21878);
} else
{if((state_val_21948 === (11)))
{var inst_21888 = (state_21947[(12)]);var inst_21902 = (state_21947[(10)]);var inst_21902__$1 = cljs.core.seq.call(null,inst_21888);var state_21947__$1 = (function (){var statearr_21971 = state_21947;(statearr_21971[(10)] = inst_21902__$1);
return statearr_21971;
})();if(inst_21902__$1)
{var statearr_21972_22014 = state_21947__$1;(statearr_21972_22014[(1)] = (13));
} else
{var statearr_21973_22015 = state_21947__$1;(statearr_21973_22015[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21948 === (9)))
{var inst_21924 = (state_21947[(2)]);var state_21947__$1 = state_21947;var statearr_21974_22016 = state_21947__$1;(statearr_21974_22016[(2)] = inst_21924);
(statearr_21974_22016[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21948 === (5)))
{var inst_21885 = cljs.core.deref.call(null,mults);var inst_21886 = cljs.core.vals.call(null,inst_21885);var inst_21887 = cljs.core.seq.call(null,inst_21886);var inst_21888 = inst_21887;var inst_21889 = null;var inst_21890 = (0);var inst_21891 = (0);var state_21947__$1 = (function (){var statearr_21975 = state_21947;(statearr_21975[(12)] = inst_21888);
(statearr_21975[(14)] = inst_21891);
(statearr_21975[(15)] = inst_21889);
(statearr_21975[(16)] = inst_21890);
return statearr_21975;
})();var statearr_21976_22017 = state_21947__$1;(statearr_21976_22017[(2)] = null);
(statearr_21976_22017[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21948 === (14)))
{var state_21947__$1 = state_21947;var statearr_21980_22018 = state_21947__$1;(statearr_21980_22018[(2)] = null);
(statearr_21980_22018[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21948 === (16)))
{var inst_21902 = (state_21947[(10)]);var inst_21906 = cljs.core.chunk_first.call(null,inst_21902);var inst_21907 = cljs.core.chunk_rest.call(null,inst_21902);var inst_21908 = cljs.core.count.call(null,inst_21906);var inst_21888 = inst_21907;var inst_21889 = inst_21906;var inst_21890 = inst_21908;var inst_21891 = (0);var state_21947__$1 = (function (){var statearr_21981 = state_21947;(statearr_21981[(12)] = inst_21888);
(statearr_21981[(14)] = inst_21891);
(statearr_21981[(15)] = inst_21889);
(statearr_21981[(16)] = inst_21890);
return statearr_21981;
})();var statearr_21982_22019 = state_21947__$1;(statearr_21982_22019[(2)] = null);
(statearr_21982_22019[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21948 === (10)))
{var inst_21888 = (state_21947[(12)]);var inst_21891 = (state_21947[(14)]);var inst_21889 = (state_21947[(15)]);var inst_21890 = (state_21947[(16)]);var inst_21896 = cljs.core._nth.call(null,inst_21889,inst_21891);var inst_21897 = cljs.core.async.muxch_STAR_.call(null,inst_21896);var inst_21898 = cljs.core.async.close_BANG_.call(null,inst_21897);var inst_21899 = (inst_21891 + (1));var tmp21977 = inst_21888;var tmp21978 = inst_21889;var tmp21979 = inst_21890;var inst_21888__$1 = tmp21977;var inst_21889__$1 = tmp21978;var inst_21890__$1 = tmp21979;var inst_21891__$1 = inst_21899;var state_21947__$1 = (function (){var statearr_21983 = state_21947;(statearr_21983[(12)] = inst_21888__$1);
(statearr_21983[(14)] = inst_21891__$1);
(statearr_21983[(17)] = inst_21898);
(statearr_21983[(15)] = inst_21889__$1);
(statearr_21983[(16)] = inst_21890__$1);
return statearr_21983;
})();var statearr_21984_22020 = state_21947__$1;(statearr_21984_22020[(2)] = null);
(statearr_21984_22020[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21948 === (18)))
{var inst_21917 = (state_21947[(2)]);var state_21947__$1 = state_21947;var statearr_21985_22021 = state_21947__$1;(statearr_21985_22021[(2)] = inst_21917);
(statearr_21985_22021[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21948 === (8)))
{var inst_21891 = (state_21947[(14)]);var inst_21890 = (state_21947[(16)]);var inst_21893 = (inst_21891 < inst_21890);var inst_21894 = inst_21893;var state_21947__$1 = state_21947;if(cljs.core.truth_(inst_21894))
{var statearr_21986_22022 = state_21947__$1;(statearr_21986_22022[(1)] = (10));
} else
{var statearr_21987_22023 = state_21947__$1;(statearr_21987_22023[(1)] = (11));
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
});})(c__6368__auto___21995,mults,ensure_mult,p))
;return ((function (switch__6353__auto__,c__6368__auto___21995,mults,ensure_mult,p){
return (function() {
var state_machine__6354__auto__ = null;
var state_machine__6354__auto____0 = (function (){var statearr_21991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21991[(0)] = state_machine__6354__auto__);
(statearr_21991[(1)] = (1));
return statearr_21991;
});
var state_machine__6354__auto____1 = (function (state_21947){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_21947);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e21992){if((e21992 instanceof Object))
{var ex__6357__auto__ = e21992;var statearr_21993_22024 = state_21947;(statearr_21993_22024[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21947);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21992;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22025 = state_21947;
state_21947 = G__22025;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_21947){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_21947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto___21995,mults,ensure_mult,p))
})();var state__6370__auto__ = (function (){var statearr_21994 = f__6369__auto__.call(null);(statearr_21994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto___21995);
return statearr_21994;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6370__auto__);
});})(c__6368__auto___21995,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6368__auto___22162 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6368__auto___22162,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6369__auto__ = (function (){var switch__6353__auto__ = ((function (c__6368__auto___22162,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22132){var state_val_22133 = (state_22132[(1)]);if((state_val_22133 === (7)))
{var state_22132__$1 = state_22132;var statearr_22134_22163 = state_22132__$1;(statearr_22134_22163[(2)] = null);
(statearr_22134_22163[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22133 === (1)))
{var state_22132__$1 = state_22132;var statearr_22135_22164 = state_22132__$1;(statearr_22135_22164[(2)] = null);
(statearr_22135_22164[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22133 === (4)))
{var inst_22096 = (state_22132[(7)]);var inst_22098 = (inst_22096 < cnt);var state_22132__$1 = state_22132;if(cljs.core.truth_(inst_22098))
{var statearr_22136_22165 = state_22132__$1;(statearr_22136_22165[(1)] = (6));
} else
{var statearr_22137_22166 = state_22132__$1;(statearr_22137_22166[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22133 === (15)))
{var inst_22128 = (state_22132[(2)]);var state_22132__$1 = state_22132;var statearr_22138_22167 = state_22132__$1;(statearr_22138_22167[(2)] = inst_22128);
(statearr_22138_22167[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22133 === (13)))
{var inst_22121 = cljs.core.async.close_BANG_.call(null,out);var state_22132__$1 = state_22132;var statearr_22139_22168 = state_22132__$1;(statearr_22139_22168[(2)] = inst_22121);
(statearr_22139_22168[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22133 === (6)))
{var state_22132__$1 = state_22132;var statearr_22140_22169 = state_22132__$1;(statearr_22140_22169[(2)] = null);
(statearr_22140_22169[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22133 === (3)))
{var inst_22130 = (state_22132[(2)]);var state_22132__$1 = state_22132;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22132__$1,inst_22130);
} else
{if((state_val_22133 === (12)))
{var inst_22118 = (state_22132[(8)]);var inst_22118__$1 = (state_22132[(2)]);var inst_22119 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22118__$1);var state_22132__$1 = (function (){var statearr_22141 = state_22132;(statearr_22141[(8)] = inst_22118__$1);
return statearr_22141;
})();if(cljs.core.truth_(inst_22119))
{var statearr_22142_22170 = state_22132__$1;(statearr_22142_22170[(1)] = (13));
} else
{var statearr_22143_22171 = state_22132__$1;(statearr_22143_22171[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22133 === (2)))
{var inst_22095 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_22096 = (0);var state_22132__$1 = (function (){var statearr_22144 = state_22132;(statearr_22144[(9)] = inst_22095);
(statearr_22144[(7)] = inst_22096);
return statearr_22144;
})();var statearr_22145_22172 = state_22132__$1;(statearr_22145_22172[(2)] = null);
(statearr_22145_22172[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22133 === (11)))
{var inst_22096 = (state_22132[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22132,(10),Object,null,(9));var inst_22105 = chs__$1.call(null,inst_22096);var inst_22106 = done.call(null,inst_22096);var inst_22107 = cljs.core.async.take_BANG_.call(null,inst_22105,inst_22106);var state_22132__$1 = state_22132;var statearr_22146_22173 = state_22132__$1;(statearr_22146_22173[(2)] = inst_22107);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22132__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22133 === (9)))
{var inst_22096 = (state_22132[(7)]);var inst_22109 = (state_22132[(2)]);var inst_22110 = (inst_22096 + (1));var inst_22096__$1 = inst_22110;var state_22132__$1 = (function (){var statearr_22147 = state_22132;(statearr_22147[(7)] = inst_22096__$1);
(statearr_22147[(10)] = inst_22109);
return statearr_22147;
})();var statearr_22148_22174 = state_22132__$1;(statearr_22148_22174[(2)] = null);
(statearr_22148_22174[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22133 === (5)))
{var inst_22116 = (state_22132[(2)]);var state_22132__$1 = (function (){var statearr_22149 = state_22132;(statearr_22149[(11)] = inst_22116);
return statearr_22149;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22132__$1,(12),dchan);
} else
{if((state_val_22133 === (14)))
{var inst_22118 = (state_22132[(8)]);var inst_22123 = cljs.core.apply.call(null,f,inst_22118);var state_22132__$1 = state_22132;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22132__$1,(16),out,inst_22123);
} else
{if((state_val_22133 === (16)))
{var inst_22125 = (state_22132[(2)]);var state_22132__$1 = (function (){var statearr_22150 = state_22132;(statearr_22150[(12)] = inst_22125);
return statearr_22150;
})();var statearr_22151_22175 = state_22132__$1;(statearr_22151_22175[(2)] = null);
(statearr_22151_22175[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22133 === (10)))
{var inst_22100 = (state_22132[(2)]);var inst_22101 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_22132__$1 = (function (){var statearr_22152 = state_22132;(statearr_22152[(13)] = inst_22100);
return statearr_22152;
})();var statearr_22153_22176 = state_22132__$1;(statearr_22153_22176[(2)] = inst_22101);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22132__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22133 === (8)))
{var inst_22114 = (state_22132[(2)]);var state_22132__$1 = state_22132;var statearr_22154_22177 = state_22132__$1;(statearr_22154_22177[(2)] = inst_22114);
(statearr_22154_22177[(1)] = (5));
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
});})(c__6368__auto___22162,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6353__auto__,c__6368__auto___22162,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6354__auto__ = null;
var state_machine__6354__auto____0 = (function (){var statearr_22158 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22158[(0)] = state_machine__6354__auto__);
(statearr_22158[(1)] = (1));
return statearr_22158;
});
var state_machine__6354__auto____1 = (function (state_22132){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_22132);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e22159){if((e22159 instanceof Object))
{var ex__6357__auto__ = e22159;var statearr_22160_22178 = state_22132;(statearr_22160_22178[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22132);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22159;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22179 = state_22132;
state_22132 = G__22179;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_22132){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_22132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto___22162,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6370__auto__ = (function (){var statearr_22161 = f__6369__auto__.call(null);(statearr_22161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto___22162);
return statearr_22161;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6370__auto__);
});})(c__6368__auto___22162,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6368__auto___22287 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6368__auto___22287,out){
return (function (){var f__6369__auto__ = (function (){var switch__6353__auto__ = ((function (c__6368__auto___22287,out){
return (function (state_22263){var state_val_22264 = (state_22263[(1)]);if((state_val_22264 === (7)))
{var inst_22243 = (state_22263[(7)]);var inst_22242 = (state_22263[(8)]);var inst_22242__$1 = (state_22263[(2)]);var inst_22243__$1 = cljs.core.nth.call(null,inst_22242__$1,(0),null);var inst_22244 = cljs.core.nth.call(null,inst_22242__$1,(1),null);var inst_22245 = (inst_22243__$1 == null);var state_22263__$1 = (function (){var statearr_22265 = state_22263;(statearr_22265[(9)] = inst_22244);
(statearr_22265[(7)] = inst_22243__$1);
(statearr_22265[(8)] = inst_22242__$1);
return statearr_22265;
})();if(cljs.core.truth_(inst_22245))
{var statearr_22266_22288 = state_22263__$1;(statearr_22266_22288[(1)] = (8));
} else
{var statearr_22267_22289 = state_22263__$1;(statearr_22267_22289[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22264 === (1)))
{var inst_22234 = cljs.core.vec.call(null,chs);var inst_22235 = inst_22234;var state_22263__$1 = (function (){var statearr_22268 = state_22263;(statearr_22268[(10)] = inst_22235);
return statearr_22268;
})();var statearr_22269_22290 = state_22263__$1;(statearr_22269_22290[(2)] = null);
(statearr_22269_22290[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22264 === (4)))
{var inst_22235 = (state_22263[(10)]);var state_22263__$1 = state_22263;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_22263__$1,(7),inst_22235);
} else
{if((state_val_22264 === (6)))
{var inst_22259 = (state_22263[(2)]);var state_22263__$1 = state_22263;var statearr_22270_22291 = state_22263__$1;(statearr_22270_22291[(2)] = inst_22259);
(statearr_22270_22291[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22264 === (3)))
{var inst_22261 = (state_22263[(2)]);var state_22263__$1 = state_22263;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22263__$1,inst_22261);
} else
{if((state_val_22264 === (2)))
{var inst_22235 = (state_22263[(10)]);var inst_22237 = cljs.core.count.call(null,inst_22235);var inst_22238 = (inst_22237 > (0));var state_22263__$1 = state_22263;if(cljs.core.truth_(inst_22238))
{var statearr_22272_22292 = state_22263__$1;(statearr_22272_22292[(1)] = (4));
} else
{var statearr_22273_22293 = state_22263__$1;(statearr_22273_22293[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22264 === (11)))
{var inst_22235 = (state_22263[(10)]);var inst_22252 = (state_22263[(2)]);var tmp22271 = inst_22235;var inst_22235__$1 = tmp22271;var state_22263__$1 = (function (){var statearr_22274 = state_22263;(statearr_22274[(11)] = inst_22252);
(statearr_22274[(10)] = inst_22235__$1);
return statearr_22274;
})();var statearr_22275_22294 = state_22263__$1;(statearr_22275_22294[(2)] = null);
(statearr_22275_22294[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22264 === (9)))
{var inst_22243 = (state_22263[(7)]);var state_22263__$1 = state_22263;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22263__$1,(11),out,inst_22243);
} else
{if((state_val_22264 === (5)))
{var inst_22257 = cljs.core.async.close_BANG_.call(null,out);var state_22263__$1 = state_22263;var statearr_22276_22295 = state_22263__$1;(statearr_22276_22295[(2)] = inst_22257);
(statearr_22276_22295[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22264 === (10)))
{var inst_22255 = (state_22263[(2)]);var state_22263__$1 = state_22263;var statearr_22277_22296 = state_22263__$1;(statearr_22277_22296[(2)] = inst_22255);
(statearr_22277_22296[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22264 === (8)))
{var inst_22235 = (state_22263[(10)]);var inst_22244 = (state_22263[(9)]);var inst_22243 = (state_22263[(7)]);var inst_22242 = (state_22263[(8)]);var inst_22247 = (function (){var c = inst_22244;var v = inst_22243;var vec__22240 = inst_22242;var cs = inst_22235;return ((function (c,v,vec__22240,cs,inst_22235,inst_22244,inst_22243,inst_22242,state_val_22264,c__6368__auto___22287,out){
return (function (p1__22180_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__22180_SHARP_);
});
;})(c,v,vec__22240,cs,inst_22235,inst_22244,inst_22243,inst_22242,state_val_22264,c__6368__auto___22287,out))
})();var inst_22248 = cljs.core.filterv.call(null,inst_22247,inst_22235);var inst_22235__$1 = inst_22248;var state_22263__$1 = (function (){var statearr_22278 = state_22263;(statearr_22278[(10)] = inst_22235__$1);
return statearr_22278;
})();var statearr_22279_22297 = state_22263__$1;(statearr_22279_22297[(2)] = null);
(statearr_22279_22297[(1)] = (2));
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
});})(c__6368__auto___22287,out))
;return ((function (switch__6353__auto__,c__6368__auto___22287,out){
return (function() {
var state_machine__6354__auto__ = null;
var state_machine__6354__auto____0 = (function (){var statearr_22283 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22283[(0)] = state_machine__6354__auto__);
(statearr_22283[(1)] = (1));
return statearr_22283;
});
var state_machine__6354__auto____1 = (function (state_22263){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_22263);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e22284){if((e22284 instanceof Object))
{var ex__6357__auto__ = e22284;var statearr_22285_22298 = state_22263;(statearr_22285_22298[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22263);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22284;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22299 = state_22263;
state_22263 = G__22299;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_22263){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_22263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto___22287,out))
})();var state__6370__auto__ = (function (){var statearr_22286 = f__6369__auto__.call(null);(statearr_22286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto___22287);
return statearr_22286;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6370__auto__);
});})(c__6368__auto___22287,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6368__auto___22392 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6368__auto___22392,out){
return (function (){var f__6369__auto__ = (function (){var switch__6353__auto__ = ((function (c__6368__auto___22392,out){
return (function (state_22369){var state_val_22370 = (state_22369[(1)]);if((state_val_22370 === (7)))
{var inst_22351 = (state_22369[(7)]);var inst_22351__$1 = (state_22369[(2)]);var inst_22352 = (inst_22351__$1 == null);var inst_22353 = cljs.core.not.call(null,inst_22352);var state_22369__$1 = (function (){var statearr_22371 = state_22369;(statearr_22371[(7)] = inst_22351__$1);
return statearr_22371;
})();if(inst_22353)
{var statearr_22372_22393 = state_22369__$1;(statearr_22372_22393[(1)] = (8));
} else
{var statearr_22373_22394 = state_22369__$1;(statearr_22373_22394[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22370 === (1)))
{var inst_22346 = (0);var state_22369__$1 = (function (){var statearr_22374 = state_22369;(statearr_22374[(8)] = inst_22346);
return statearr_22374;
})();var statearr_22375_22395 = state_22369__$1;(statearr_22375_22395[(2)] = null);
(statearr_22375_22395[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22370 === (4)))
{var state_22369__$1 = state_22369;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22369__$1,(7),ch);
} else
{if((state_val_22370 === (6)))
{var inst_22364 = (state_22369[(2)]);var state_22369__$1 = state_22369;var statearr_22376_22396 = state_22369__$1;(statearr_22376_22396[(2)] = inst_22364);
(statearr_22376_22396[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22370 === (3)))
{var inst_22366 = (state_22369[(2)]);var inst_22367 = cljs.core.async.close_BANG_.call(null,out);var state_22369__$1 = (function (){var statearr_22377 = state_22369;(statearr_22377[(9)] = inst_22366);
return statearr_22377;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22369__$1,inst_22367);
} else
{if((state_val_22370 === (2)))
{var inst_22346 = (state_22369[(8)]);var inst_22348 = (inst_22346 < n);var state_22369__$1 = state_22369;if(cljs.core.truth_(inst_22348))
{var statearr_22378_22397 = state_22369__$1;(statearr_22378_22397[(1)] = (4));
} else
{var statearr_22379_22398 = state_22369__$1;(statearr_22379_22398[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22370 === (11)))
{var inst_22346 = (state_22369[(8)]);var inst_22356 = (state_22369[(2)]);var inst_22357 = (inst_22346 + (1));var inst_22346__$1 = inst_22357;var state_22369__$1 = (function (){var statearr_22380 = state_22369;(statearr_22380[(10)] = inst_22356);
(statearr_22380[(8)] = inst_22346__$1);
return statearr_22380;
})();var statearr_22381_22399 = state_22369__$1;(statearr_22381_22399[(2)] = null);
(statearr_22381_22399[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22370 === (9)))
{var state_22369__$1 = state_22369;var statearr_22382_22400 = state_22369__$1;(statearr_22382_22400[(2)] = null);
(statearr_22382_22400[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22370 === (5)))
{var state_22369__$1 = state_22369;var statearr_22383_22401 = state_22369__$1;(statearr_22383_22401[(2)] = null);
(statearr_22383_22401[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22370 === (10)))
{var inst_22361 = (state_22369[(2)]);var state_22369__$1 = state_22369;var statearr_22384_22402 = state_22369__$1;(statearr_22384_22402[(2)] = inst_22361);
(statearr_22384_22402[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22370 === (8)))
{var inst_22351 = (state_22369[(7)]);var state_22369__$1 = state_22369;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22369__$1,(11),out,inst_22351);
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
});})(c__6368__auto___22392,out))
;return ((function (switch__6353__auto__,c__6368__auto___22392,out){
return (function() {
var state_machine__6354__auto__ = null;
var state_machine__6354__auto____0 = (function (){var statearr_22388 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_22388[(0)] = state_machine__6354__auto__);
(statearr_22388[(1)] = (1));
return statearr_22388;
});
var state_machine__6354__auto____1 = (function (state_22369){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_22369);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e22389){if((e22389 instanceof Object))
{var ex__6357__auto__ = e22389;var statearr_22390_22403 = state_22369;(statearr_22390_22403[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22369);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22389;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22404 = state_22369;
state_22369 = G__22404;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_22369){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_22369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto___22392,out))
})();var state__6370__auto__ = (function (){var statearr_22391 = f__6369__auto__.call(null);(statearr_22391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto___22392);
return statearr_22391;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6370__auto__);
});})(c__6368__auto___22392,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6368__auto___22501 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6368__auto___22501,out){
return (function (){var f__6369__auto__ = (function (){var switch__6353__auto__ = ((function (c__6368__auto___22501,out){
return (function (state_22476){var state_val_22477 = (state_22476[(1)]);if((state_val_22477 === (7)))
{var inst_22471 = (state_22476[(2)]);var state_22476__$1 = state_22476;var statearr_22478_22502 = state_22476__$1;(statearr_22478_22502[(2)] = inst_22471);
(statearr_22478_22502[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22477 === (1)))
{var inst_22453 = null;var state_22476__$1 = (function (){var statearr_22479 = state_22476;(statearr_22479[(7)] = inst_22453);
return statearr_22479;
})();var statearr_22480_22503 = state_22476__$1;(statearr_22480_22503[(2)] = null);
(statearr_22480_22503[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22477 === (4)))
{var inst_22456 = (state_22476[(8)]);var inst_22456__$1 = (state_22476[(2)]);var inst_22457 = (inst_22456__$1 == null);var inst_22458 = cljs.core.not.call(null,inst_22457);var state_22476__$1 = (function (){var statearr_22481 = state_22476;(statearr_22481[(8)] = inst_22456__$1);
return statearr_22481;
})();if(inst_22458)
{var statearr_22482_22504 = state_22476__$1;(statearr_22482_22504[(1)] = (5));
} else
{var statearr_22483_22505 = state_22476__$1;(statearr_22483_22505[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22477 === (6)))
{var state_22476__$1 = state_22476;var statearr_22484_22506 = state_22476__$1;(statearr_22484_22506[(2)] = null);
(statearr_22484_22506[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22477 === (3)))
{var inst_22473 = (state_22476[(2)]);var inst_22474 = cljs.core.async.close_BANG_.call(null,out);var state_22476__$1 = (function (){var statearr_22485 = state_22476;(statearr_22485[(9)] = inst_22473);
return statearr_22485;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22476__$1,inst_22474);
} else
{if((state_val_22477 === (2)))
{var state_22476__$1 = state_22476;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22476__$1,(4),ch);
} else
{if((state_val_22477 === (11)))
{var inst_22456 = (state_22476[(8)]);var inst_22465 = (state_22476[(2)]);var inst_22453 = inst_22456;var state_22476__$1 = (function (){var statearr_22486 = state_22476;(statearr_22486[(7)] = inst_22453);
(statearr_22486[(10)] = inst_22465);
return statearr_22486;
})();var statearr_22487_22507 = state_22476__$1;(statearr_22487_22507[(2)] = null);
(statearr_22487_22507[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22477 === (9)))
{var inst_22456 = (state_22476[(8)]);var state_22476__$1 = state_22476;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22476__$1,(11),out,inst_22456);
} else
{if((state_val_22477 === (5)))
{var inst_22453 = (state_22476[(7)]);var inst_22456 = (state_22476[(8)]);var inst_22460 = cljs.core._EQ_.call(null,inst_22456,inst_22453);var state_22476__$1 = state_22476;if(inst_22460)
{var statearr_22489_22508 = state_22476__$1;(statearr_22489_22508[(1)] = (8));
} else
{var statearr_22490_22509 = state_22476__$1;(statearr_22490_22509[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22477 === (10)))
{var inst_22468 = (state_22476[(2)]);var state_22476__$1 = state_22476;var statearr_22491_22510 = state_22476__$1;(statearr_22491_22510[(2)] = inst_22468);
(statearr_22491_22510[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22477 === (8)))
{var inst_22453 = (state_22476[(7)]);var tmp22488 = inst_22453;var inst_22453__$1 = tmp22488;var state_22476__$1 = (function (){var statearr_22492 = state_22476;(statearr_22492[(7)] = inst_22453__$1);
return statearr_22492;
})();var statearr_22493_22511 = state_22476__$1;(statearr_22493_22511[(2)] = null);
(statearr_22493_22511[(1)] = (2));
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
});})(c__6368__auto___22501,out))
;return ((function (switch__6353__auto__,c__6368__auto___22501,out){
return (function() {
var state_machine__6354__auto__ = null;
var state_machine__6354__auto____0 = (function (){var statearr_22497 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_22497[(0)] = state_machine__6354__auto__);
(statearr_22497[(1)] = (1));
return statearr_22497;
});
var state_machine__6354__auto____1 = (function (state_22476){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_22476);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e22498){if((e22498 instanceof Object))
{var ex__6357__auto__ = e22498;var statearr_22499_22512 = state_22476;(statearr_22499_22512[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22476);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22498;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22513 = state_22476;
state_22476 = G__22513;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_22476){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_22476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto___22501,out))
})();var state__6370__auto__ = (function (){var statearr_22500 = f__6369__auto__.call(null);(statearr_22500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto___22501);
return statearr_22500;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6370__auto__);
});})(c__6368__auto___22501,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6368__auto___22648 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6368__auto___22648,out){
return (function (){var f__6369__auto__ = (function (){var switch__6353__auto__ = ((function (c__6368__auto___22648,out){
return (function (state_22618){var state_val_22619 = (state_22618[(1)]);if((state_val_22619 === (7)))
{var inst_22614 = (state_22618[(2)]);var state_22618__$1 = state_22618;var statearr_22620_22649 = state_22618__$1;(statearr_22620_22649[(2)] = inst_22614);
(statearr_22620_22649[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22619 === (1)))
{var inst_22581 = (new Array(n));var inst_22582 = inst_22581;var inst_22583 = (0);var state_22618__$1 = (function (){var statearr_22621 = state_22618;(statearr_22621[(7)] = inst_22582);
(statearr_22621[(8)] = inst_22583);
return statearr_22621;
})();var statearr_22622_22650 = state_22618__$1;(statearr_22622_22650[(2)] = null);
(statearr_22622_22650[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22619 === (4)))
{var inst_22586 = (state_22618[(9)]);var inst_22586__$1 = (state_22618[(2)]);var inst_22587 = (inst_22586__$1 == null);var inst_22588 = cljs.core.not.call(null,inst_22587);var state_22618__$1 = (function (){var statearr_22623 = state_22618;(statearr_22623[(9)] = inst_22586__$1);
return statearr_22623;
})();if(inst_22588)
{var statearr_22624_22651 = state_22618__$1;(statearr_22624_22651[(1)] = (5));
} else
{var statearr_22625_22652 = state_22618__$1;(statearr_22625_22652[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22619 === (15)))
{var inst_22608 = (state_22618[(2)]);var state_22618__$1 = state_22618;var statearr_22626_22653 = state_22618__$1;(statearr_22626_22653[(2)] = inst_22608);
(statearr_22626_22653[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22619 === (13)))
{var state_22618__$1 = state_22618;var statearr_22627_22654 = state_22618__$1;(statearr_22627_22654[(2)] = null);
(statearr_22627_22654[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22619 === (6)))
{var inst_22583 = (state_22618[(8)]);var inst_22604 = (inst_22583 > (0));var state_22618__$1 = state_22618;if(cljs.core.truth_(inst_22604))
{var statearr_22628_22655 = state_22618__$1;(statearr_22628_22655[(1)] = (12));
} else
{var statearr_22629_22656 = state_22618__$1;(statearr_22629_22656[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22619 === (3)))
{var inst_22616 = (state_22618[(2)]);var state_22618__$1 = state_22618;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22618__$1,inst_22616);
} else
{if((state_val_22619 === (12)))
{var inst_22582 = (state_22618[(7)]);var inst_22606 = cljs.core.vec.call(null,inst_22582);var state_22618__$1 = state_22618;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22618__$1,(15),out,inst_22606);
} else
{if((state_val_22619 === (2)))
{var state_22618__$1 = state_22618;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22618__$1,(4),ch);
} else
{if((state_val_22619 === (11)))
{var inst_22598 = (state_22618[(2)]);var inst_22599 = (new Array(n));var inst_22582 = inst_22599;var inst_22583 = (0);var state_22618__$1 = (function (){var statearr_22630 = state_22618;(statearr_22630[(7)] = inst_22582);
(statearr_22630[(8)] = inst_22583);
(statearr_22630[(10)] = inst_22598);
return statearr_22630;
})();var statearr_22631_22657 = state_22618__$1;(statearr_22631_22657[(2)] = null);
(statearr_22631_22657[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22619 === (9)))
{var inst_22582 = (state_22618[(7)]);var inst_22596 = cljs.core.vec.call(null,inst_22582);var state_22618__$1 = state_22618;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22618__$1,(11),out,inst_22596);
} else
{if((state_val_22619 === (5)))
{var inst_22586 = (state_22618[(9)]);var inst_22582 = (state_22618[(7)]);var inst_22583 = (state_22618[(8)]);var inst_22591 = (state_22618[(11)]);var inst_22590 = (inst_22582[inst_22583] = inst_22586);var inst_22591__$1 = (inst_22583 + (1));var inst_22592 = (inst_22591__$1 < n);var state_22618__$1 = (function (){var statearr_22632 = state_22618;(statearr_22632[(12)] = inst_22590);
(statearr_22632[(11)] = inst_22591__$1);
return statearr_22632;
})();if(cljs.core.truth_(inst_22592))
{var statearr_22633_22658 = state_22618__$1;(statearr_22633_22658[(1)] = (8));
} else
{var statearr_22634_22659 = state_22618__$1;(statearr_22634_22659[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22619 === (14)))
{var inst_22611 = (state_22618[(2)]);var inst_22612 = cljs.core.async.close_BANG_.call(null,out);var state_22618__$1 = (function (){var statearr_22636 = state_22618;(statearr_22636[(13)] = inst_22611);
return statearr_22636;
})();var statearr_22637_22660 = state_22618__$1;(statearr_22637_22660[(2)] = inst_22612);
(statearr_22637_22660[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22619 === (10)))
{var inst_22602 = (state_22618[(2)]);var state_22618__$1 = state_22618;var statearr_22638_22661 = state_22618__$1;(statearr_22638_22661[(2)] = inst_22602);
(statearr_22638_22661[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22619 === (8)))
{var inst_22582 = (state_22618[(7)]);var inst_22591 = (state_22618[(11)]);var tmp22635 = inst_22582;var inst_22582__$1 = tmp22635;var inst_22583 = inst_22591;var state_22618__$1 = (function (){var statearr_22639 = state_22618;(statearr_22639[(7)] = inst_22582__$1);
(statearr_22639[(8)] = inst_22583);
return statearr_22639;
})();var statearr_22640_22662 = state_22618__$1;(statearr_22640_22662[(2)] = null);
(statearr_22640_22662[(1)] = (2));
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
});})(c__6368__auto___22648,out))
;return ((function (switch__6353__auto__,c__6368__auto___22648,out){
return (function() {
var state_machine__6354__auto__ = null;
var state_machine__6354__auto____0 = (function (){var statearr_22644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22644[(0)] = state_machine__6354__auto__);
(statearr_22644[(1)] = (1));
return statearr_22644;
});
var state_machine__6354__auto____1 = (function (state_22618){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_22618);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e22645){if((e22645 instanceof Object))
{var ex__6357__auto__ = e22645;var statearr_22646_22663 = state_22618;(statearr_22646_22663[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22618);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22645;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22664 = state_22618;
state_22618 = G__22664;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_22618){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_22618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto___22648,out))
})();var state__6370__auto__ = (function (){var statearr_22647 = f__6369__auto__.call(null);(statearr_22647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto___22648);
return statearr_22647;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6370__auto__);
});})(c__6368__auto___22648,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6368__auto___22807 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6368__auto___22807,out){
return (function (){var f__6369__auto__ = (function (){var switch__6353__auto__ = ((function (c__6368__auto___22807,out){
return (function (state_22777){var state_val_22778 = (state_22777[(1)]);if((state_val_22778 === (7)))
{var inst_22773 = (state_22777[(2)]);var state_22777__$1 = state_22777;var statearr_22779_22808 = state_22777__$1;(statearr_22779_22808[(2)] = inst_22773);
(statearr_22779_22808[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22778 === (1)))
{var inst_22736 = [];var inst_22737 = inst_22736;var inst_22738 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_22777__$1 = (function (){var statearr_22780 = state_22777;(statearr_22780[(7)] = inst_22738);
(statearr_22780[(8)] = inst_22737);
return statearr_22780;
})();var statearr_22781_22809 = state_22777__$1;(statearr_22781_22809[(2)] = null);
(statearr_22781_22809[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22778 === (4)))
{var inst_22741 = (state_22777[(9)]);var inst_22741__$1 = (state_22777[(2)]);var inst_22742 = (inst_22741__$1 == null);var inst_22743 = cljs.core.not.call(null,inst_22742);var state_22777__$1 = (function (){var statearr_22782 = state_22777;(statearr_22782[(9)] = inst_22741__$1);
return statearr_22782;
})();if(inst_22743)
{var statearr_22783_22810 = state_22777__$1;(statearr_22783_22810[(1)] = (5));
} else
{var statearr_22784_22811 = state_22777__$1;(statearr_22784_22811[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22778 === (15)))
{var inst_22767 = (state_22777[(2)]);var state_22777__$1 = state_22777;var statearr_22785_22812 = state_22777__$1;(statearr_22785_22812[(2)] = inst_22767);
(statearr_22785_22812[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22778 === (13)))
{var state_22777__$1 = state_22777;var statearr_22786_22813 = state_22777__$1;(statearr_22786_22813[(2)] = null);
(statearr_22786_22813[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22778 === (6)))
{var inst_22737 = (state_22777[(8)]);var inst_22762 = inst_22737.length;var inst_22763 = (inst_22762 > (0));var state_22777__$1 = state_22777;if(cljs.core.truth_(inst_22763))
{var statearr_22787_22814 = state_22777__$1;(statearr_22787_22814[(1)] = (12));
} else
{var statearr_22788_22815 = state_22777__$1;(statearr_22788_22815[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22778 === (3)))
{var inst_22775 = (state_22777[(2)]);var state_22777__$1 = state_22777;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22777__$1,inst_22775);
} else
{if((state_val_22778 === (12)))
{var inst_22737 = (state_22777[(8)]);var inst_22765 = cljs.core.vec.call(null,inst_22737);var state_22777__$1 = state_22777;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22777__$1,(15),out,inst_22765);
} else
{if((state_val_22778 === (2)))
{var state_22777__$1 = state_22777;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22777__$1,(4),ch);
} else
{if((state_val_22778 === (11)))
{var inst_22741 = (state_22777[(9)]);var inst_22745 = (state_22777[(10)]);var inst_22755 = (state_22777[(2)]);var inst_22756 = [];var inst_22757 = inst_22756.push(inst_22741);var inst_22737 = inst_22756;var inst_22738 = inst_22745;var state_22777__$1 = (function (){var statearr_22789 = state_22777;(statearr_22789[(11)] = inst_22755);
(statearr_22789[(12)] = inst_22757);
(statearr_22789[(7)] = inst_22738);
(statearr_22789[(8)] = inst_22737);
return statearr_22789;
})();var statearr_22790_22816 = state_22777__$1;(statearr_22790_22816[(2)] = null);
(statearr_22790_22816[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22778 === (9)))
{var inst_22737 = (state_22777[(8)]);var inst_22753 = cljs.core.vec.call(null,inst_22737);var state_22777__$1 = state_22777;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22777__$1,(11),out,inst_22753);
} else
{if((state_val_22778 === (5)))
{var inst_22741 = (state_22777[(9)]);var inst_22745 = (state_22777[(10)]);var inst_22738 = (state_22777[(7)]);var inst_22745__$1 = f.call(null,inst_22741);var inst_22746 = cljs.core._EQ_.call(null,inst_22745__$1,inst_22738);var inst_22747 = cljs.core.keyword_identical_QMARK_.call(null,inst_22738,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_22748 = (inst_22746) || (inst_22747);var state_22777__$1 = (function (){var statearr_22791 = state_22777;(statearr_22791[(10)] = inst_22745__$1);
return statearr_22791;
})();if(cljs.core.truth_(inst_22748))
{var statearr_22792_22817 = state_22777__$1;(statearr_22792_22817[(1)] = (8));
} else
{var statearr_22793_22818 = state_22777__$1;(statearr_22793_22818[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22778 === (14)))
{var inst_22770 = (state_22777[(2)]);var inst_22771 = cljs.core.async.close_BANG_.call(null,out);var state_22777__$1 = (function (){var statearr_22795 = state_22777;(statearr_22795[(13)] = inst_22770);
return statearr_22795;
})();var statearr_22796_22819 = state_22777__$1;(statearr_22796_22819[(2)] = inst_22771);
(statearr_22796_22819[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22778 === (10)))
{var inst_22760 = (state_22777[(2)]);var state_22777__$1 = state_22777;var statearr_22797_22820 = state_22777__$1;(statearr_22797_22820[(2)] = inst_22760);
(statearr_22797_22820[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22778 === (8)))
{var inst_22741 = (state_22777[(9)]);var inst_22745 = (state_22777[(10)]);var inst_22737 = (state_22777[(8)]);var inst_22750 = inst_22737.push(inst_22741);var tmp22794 = inst_22737;var inst_22737__$1 = tmp22794;var inst_22738 = inst_22745;var state_22777__$1 = (function (){var statearr_22798 = state_22777;(statearr_22798[(14)] = inst_22750);
(statearr_22798[(7)] = inst_22738);
(statearr_22798[(8)] = inst_22737__$1);
return statearr_22798;
})();var statearr_22799_22821 = state_22777__$1;(statearr_22799_22821[(2)] = null);
(statearr_22799_22821[(1)] = (2));
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
});})(c__6368__auto___22807,out))
;return ((function (switch__6353__auto__,c__6368__auto___22807,out){
return (function() {
var state_machine__6354__auto__ = null;
var state_machine__6354__auto____0 = (function (){var statearr_22803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22803[(0)] = state_machine__6354__auto__);
(statearr_22803[(1)] = (1));
return statearr_22803;
});
var state_machine__6354__auto____1 = (function (state_22777){while(true){
var ret_value__6355__auto__ = (function (){try{while(true){
var result__6356__auto__ = switch__6353__auto__.call(null,state_22777);if(cljs.core.keyword_identical_QMARK_.call(null,result__6356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6356__auto__;
}
break;
}
}catch (e22804){if((e22804 instanceof Object))
{var ex__6357__auto__ = e22804;var statearr_22805_22822 = state_22777;(statearr_22805_22822[(5)] = ex__6357__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22777);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22804;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22823 = state_22777;
state_22777 = G__22823;
continue;
}
} else
{return ret_value__6355__auto__;
}
break;
}
});
state_machine__6354__auto__ = function(state_22777){
switch(arguments.length){
case 0:
return state_machine__6354__auto____0.call(this);
case 1:
return state_machine__6354__auto____1.call(this,state_22777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6354__auto____0;
state_machine__6354__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6354__auto____1;
return state_machine__6354__auto__;
})()
;})(switch__6353__auto__,c__6368__auto___22807,out))
})();var state__6370__auto__ = (function (){var statearr_22806 = f__6369__auto__.call(null);(statearr_22806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6368__auto___22807);
return statearr_22806;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6370__auto__);
});})(c__6368__auto___22807,out))
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
