print ("armstrong numbers are : ")
for n in range (1,1000),
sum=0
x=n
while x>0:
r=x%10
sum = sum + r*r*r
x //=10
if sum == n:
print(n,end="")