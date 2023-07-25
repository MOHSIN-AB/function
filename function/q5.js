function findprimes (start,end){
    let prime =[];
    for ( let i = start; i<= end ; i++){
        if (isprime(i)){
            prime.push(i);
        }
    }
    return primes;
}
function isprime(num) {
    if (num<=1)return false;
    for (let i=2;i<=math.sqrt(num); i++){
        if (num % i===0){
            return false ;
        }
    }
    return  true;
}
findprimes(2,20);
findprimes(30,50);