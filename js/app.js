
// set cost for all products 
function updateCost(product, cost) {
    const updatedCost = document.getElementById(product + "-cost");
    updatedCost.innerText = cost;

    // initially display none for promo portion
    document.getElementById("display-cupon").style.display = "none";


    // calling totallcal function 
    totalCalculate();
}

// get input value =========================
function getInputvalue(product) {
    return parseInt(document.getElementById(product + "-cost").innerText);

}

// calculate totall price ================
function totalCalculate() {
    const totalBestPrice = getInputvalue("best");
    const totalMemoryCost = getInputvalue("extra-memory");
    const totalStorageCost = getInputvalue("extra-storage");
    const totalDeliveryCost = getInputvalue("delivery");

    const totalPrice = totalBestPrice + totalMemoryCost + totalStorageCost + totalDeliveryCost;
    document.getElementById("totall-cost").innerText = totalPrice;

    // footer totall cost calculation ==========
    document.getElementById("totall-offer-cost").innerText = totalPrice;
    return totalPrice;

}


//for cupon code===========================
function applyPromoCode() {
    const promoCode = document.getElementById("promo-code").value;

    if (promoCode == "stevekaku") {
        document.getElementById("totall-offer-cost").innerText = totalCalculate() - ((totalCalculate() * 20) / 100);

        document.getElementById("applied-cupon").innerText = document.getElementById("promo-code").value;

        document.getElementById("display-cupon").style.display = "block";

        // set empty string to input field 
        document.getElementById("promo-code").value = "";

    }
    else {
        alert("wrong cupon");
    }

}


// 8gb memory cost setup ======================
document.getElementById("8gb-memory").addEventListener('click', function
    () {
    updateCost("extra-memory", 0);
})

// 16gb memory cost setup=======================
document.getElementById("16gb-memory").addEventListener('click', function
    () {
    updateCost("extra-memory", 180);
})

// 256gb memory cost setup======================
document.getElementById("256gb-storage").addEventListener('click', function
    () {
    updateCost("extra-storage", 0);
})

// 512gb memory cost setup======================
document.getElementById("512gb-storage").addEventListener('click', function
    () {
    updateCost("extra-storage", 100);
})

// 1TBgb memory cost setup======================
document.getElementById("1tb-storage").addEventListener('click', function
    () {
    updateCost("extra-storage", 180);
})

// shipment cost setup==========================
document.getElementById("free-delivery").addEventListener('click', function
    () {
    updateCost("delivery", 0);
})

document.getElementById("paid-delivery").addEventListener('click', function
    () {
    updateCost("delivery", 20);
})


// promo code portion ========================
document.getElementById("promo-btn").addEventListener('click', function
    () {
    applyPromoCode();
})


