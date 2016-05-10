def instant_runoff(candidates, votes):
	voteCount = {candidate:[] for candidate in candidates}
	for vote in votes:
		voteCount[vote[0]].append(vote)
	N = sum(len(voteCount[candidate]) for candidate in voteCount)
	while len(voteCount)>1:
		candidateMin = min(voteCount.items(), key = lambda item: len(item[1]))
		added = []
		for vote in voteCount[candidateMin[0]]:
			vote = vote[1:]
			while(vote and vote[0] not in voteCount): 
				vote = vote[1:]
			if vote:
				added.append(vote)
			else:
				N-=1
		for vote in added:
			voteCount[vote[0]].append(vote)
		del voteCount[candidateMin[0]]
	return list(voteCount.keys())[0]

if __name__ == '__main__':
	#Example of it running
	print(instant_runoff(["Bob", "Sue", "Bill"], [["Bob", "Bill", "Sue"],["Sue", "Bob", "Bill"], ["Bill", "Sue", "Bob"], ["Bob", "Bill", "Sue"],["Sue", "Bob", "Bill"]]))