import {Utils,state} from '../lib/component';
import * as assert from 'assert';
let arr=[1,2,3,4]
Utils.each(arr,(v,i,l)=>{console.log(v,i)});
assert.ok(Utils.isInteger(5),'5 is interger');
assert.notEqual(Utils.isInteger('a'),'a isn\'t interger');

import * as graph from '../lib/graph';
let node=graph.createNode(5);
assert.ok(node.value===5,'create node value:5');
assert.ok(graph.createNode('a',[node]).childs[0]===node,'create node value:5');

let list=[1,2,3,4,5];
let tree=graph.createGraph(list);
graph.travelTree(tree,(v)=>console.log(v));

let s=state(0);
assert.ok(s.state===0,'init state is 0');
s.state=3;
assert.ok(s.state===3,'state change to 3');