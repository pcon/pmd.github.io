var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":20,"id":8778,"methods":[{"el":11,"sc":5,"sl":9},{"el":19,"sc":5,"sl":16}],"name":"ASTEmptyExpression","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_296":{"methods":[{"sl":9},{"sl":16}],"name":"testXorAssignment","pass":true,"statements":[{"sl":10},{"sl":18}]},"test_390":{"methods":[{"sl":9},{"sl":16}],"name":"testEcmascript","pass":true,"statements":[{"sl":10},{"sl":18}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [296, 390], [296, 390], [], [], [], [], [], [296, 390], [], [296, 390], [], []]
