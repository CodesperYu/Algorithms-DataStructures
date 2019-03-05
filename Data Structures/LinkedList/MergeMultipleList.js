let mergeKLists = function (lists) {
  let mergedLinkList = null
  for (let i = 0; i < lists.length; i++) {
    if (mergedLinkList === null) {
      mergedLinkList = lists[i]
    } else {
      mergedLinkList = combineTwoSortedLists(mergedLinkList, lists[i])
    }
  }
  return mergedLinkList
}

let combineTwoSortedLists = (mainList, listToInsert) => {
  let mainListCurr = mainList
  let mainListPrev = null
  let listToInsertCurr = listToInsert

  while (listToInsertCurr !== null) {
    if (mainListCurr.val >= listToInsertCurr.val) {
      let temp = listToInsertCurr.next

      // reset if you replace the head node
      if (mainListPrev === null) {
        listToInsertCurr.next = mainListCurr
        mainList = listToInsertCurr
        mainListCurr = mainList
        // else change mainlistprev.next to listtoinsertcurr
        // list to insert curr.next
      } else {
        listToInsertCurr.next = mainListCurr
        mainListPrev.next = listToInsertCurr
        mainListCurr = mainListPrev.next
      }
      listToInsertCurr = temp
      console.log(listToInsertCurr)
    } else {
      if (mainListCurr.next === null) {
        mainListCurr.next = listToInsertCurr
        listToInsertCurr = null
      } else {
        mainListPrev = mainListCurr
        mainListCurr = mainListCurr.next
      }
    }
  }
  return mainList
}
