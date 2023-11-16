$(document).ready(function () {
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";

    $('.leftLst, .rightLst').click(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselSize();




    $(window).resize(function () {
        ResCarouselSize();
    });


    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousel" + id);


            if (bodyWidth >= 1200) {
                incno = itemsSplit[3];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 992) {
                incno = itemsSplit[2];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 768) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }


    function ResCarousel(e, el, s) {
        var leftBtn = ('.leftLst');
        var rightBtn = ('.rightLst');
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');
        var values = divStyle.match(/-?[\d\.]+/g);
        var xds = Math.abs(values[4]);
        if (e == 0) {
            translateXval = parseInt(xds) - parseInt(itemWidth * s);
            $(el + ' ' + rightBtn).removeClass("over");

            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                $(el + ' ' + leftBtn).addClass("over");
            }
        }
        else if (e == 1) {
            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
            translateXval = parseInt(xds) + parseInt(itemWidth * s);
            $(el + ' ' + leftBtn).removeClass("over");

            if (translateXval >= itemsCondition - itemWidth / 2) {
                translateXval = itemsCondition;
                $(el + ' ' + rightBtn).addClass("over");
            }
        }
        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
    }

    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }

});


function toggleStockStatus() {
    var inStockElement = document.getElementById('freeDeliveryId');
    var outOfStockElement = document.getElementById('outOfStockId');
    var notifiedId = document.getElementById('notifiedId');
    var addToWishlistContainerId = document.getElementById('addToWishlistContainerId');
    var addToCardContainersId = document.getElementById('addToCardContainersId');
    var cartInnerId = document.getElementById('cartInnerId');

    if (inStockElement.style.display !== 'none') {
        inStockElement.style.display = 'none';
        outOfStockElement.style.display = 'block';
        notifiedId.style.display='block';
        addToWishlistContainerId.style.display="block"
        addToCardContainersId.style.display="none"
        cartInnerId.style.display="none"
    } else {
        inStockElement.style.display = 'block';
        outOfStockElement.style.display = 'none';
        notifiedId.style.display='none';
        addToWishlistContainerId.style.display="none"
        addToCardContainersId.style.display="block"
        cartInnerId.style.display="block"
      
    }
}

function changeText() {
    var addToCartContainer = document.getElementById('addToCardContainersId');

    if (addToCartContainer.innerHTML.includes('ADD TO CART')) {
        addToCartContainer.innerHTML = '<p>ADDED TO CART</p>';
        addToCartContainer.style.backgroundColor = '#808080'; 
    } else {
        addToCartContainer.innerHTML = '<p>ADD TO CART</p>';
        addToCartContainer.style.backgroundColor = '#b9d737';
    }

    setTimeout(function () {
        addToCartContainer.innerHTML = '<p>ADD TO CART</p>';
        addToCartContainer.style.backgroundColor = '#b9d737'; 
    }, 5000);
}

document.getElementById('addToCardContainersId').addEventListener('click', changeText);

function changeTexts() {
    var addToCartContainer = document.getElementById('addToCardContainersIds');

    if (addToCartContainer.innerHTML.includes('ADD TO CART')) {
        addToCartContainer.innerHTML = '<p>ADDED TO CART</p>';
        addToCartContainer.style.backgroundColor = '#808080'; 
    } else {
        addToCartContainer.innerHTML = '<p>ADD TO CART</p>';
        addToCartContainer.style.backgroundColor = '#b9d737';
    }

    setTimeout(function () {
        addToCartContainer.innerHTML = '<p>ADD TO CART</p>';
        addToCartContainer.style.backgroundColor = '#b9d737'; 
    }, 5000);
}

document.getElementById('addToCardContainersIds').addEventListener('click', changeTexts);
function changeTextFav() {
    var addToWishlistContainer = document.getElementById('addToWishlistContainerId');
    var addToWishlistIcon = addToWishlistContainer.querySelector('svg');

    if (addToWishlistContainer.innerHTML.includes('ADD TO WISHLIST')) {
        addToWishlistContainer.innerHTML = `<p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#e92662" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
      </svg> ADDED TO WISHLIST</p>`;

        addToWishlistIcon.classList.add('zoom-in-animation');

        addToWishlistContainer.addEventListener('click', function revertToWishlist() {
            addToWishlistContainer.innerHTML = `<p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#e92662" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
      </svg> ADD TO WISHLIST</p>`;
            addToWishlistContainer.removeEventListener('click', revertToWishlist);
        });
    }
}


document.getElementById('addToWishlistContainerId').addEventListener('click', changeTextFav);


document.addEventListener('DOMContentLoaded', function () {
    var displayElement = document.getElementById('display');

    var incrementElement = document.getElementById('increment');
    var decrementElement = document.getElementById('decrement');

    var minValue = 1;
    var maxValue = 5;
    var currentValue = minValue;
    displayElement.textContent = currentValue;

    function increment() {
        currentValue = (currentValue % maxValue) + 1;
        displayElement.textContent = currentValue;
    }

    function decrement() {
        if (currentValue > minValue) {
            currentValue--;
        }
        displayElement.textContent = currentValue;
    }

    incrementElement.addEventListener('click', increment);
    decrementElement.addEventListener('click', decrement);
});

document.addEventListener('DOMContentLoaded', function () {
    var displayElement = document.getElementById('displays');

    var incrementElement = document.getElementById('increments');
    var decrementElement = document.getElementById('decrements');

    var minValue = 1;
    var maxValue = 5;
    var currentValue = minValue;
    displayElement.textContent = currentValue;

    function increment() {
        currentValue = (currentValue % maxValue) + 1;
        displayElement.textContent = currentValue;
    }

    function decrement() {
        if (currentValue > minValue) {
            currentValue--;
        }
        displayElement.textContent = currentValue;
    }

    incrementElement.addEventListener('click', increment);
    decrementElement.addEventListener('click', decrement);
});



document.addEventListener('DOMContentLoaded', function () {
    var currentPrice = 399.00;
    var currentDiscount = -49;
    var originalPrice = 1740.00;
    var currentColor = 'Beige';

    function updatePricesAndColor(newPrice, newDiscount, newOriginalPrice, newColor, newSize, stock) {
        document.querySelector('.price399').textContent = newPrice.toFixed(2);
        document.querySelector('#price399Id').textContent = newPrice.toFixed(2);
        var inStockElement = document.getElementById('freeDeliveryId');
        var outOfStockElement = document.getElementById('outOfStockId');
        var notifiedId = document.getElementById('notifiedId');
        var addToWishlistContainerId = document.getElementById('addToWishlistContainerId');
        var addToCardContainersId = document.getElementById('addToCardContainersId');
        var cartInnerId = document.getElementById('cartInnerId');
        var originalDiscount = document.querySelector('.deduction');
        var originalPriceElement = document.querySelector('.skuCut s');
        if (newOriginalPrice) {
            originalPriceElement.textContent = "QAR " + newOriginalPrice.toFixed(2);
            originalPriceElement.style.display = 'inline';
        } else {
            originalPriceElement.style.display = 'none';
        }
        if (newDiscount) {
            originalDiscount.textContent = newDiscount + "%";
            originalDiscount.style.display = 'inline';
        } else {
            originalDiscount.style.display = 'none';
        }

        if (stock === 'in') {

            inStockElement.style.display = 'block';
            outOfStockElement.style.display = 'none';
            notifiedId.style.display = 'none';
            addToWishlistContainerId.style.display = "none"
            addToCardContainersId.style.display = "block"
            cartInnerId.style.display = "block"
        }
        if (stock === 'out') {
            inStockElement.style.display = 'none';
            outOfStockElement.style.display = 'block';
            notifiedId.style.display = 'block';
            addToWishlistContainerId.style.display = "block"
            addToCardContainersId.style.display = "none"
            cartInnerId.style.display = "none"

        }

        document.querySelector('#freeDeliveryIds').textContent = newColor;
        document.querySelector('#descId').textContent = newColor;
        document.querySelector('#sizeId').textContent = newSize;

        var allImages = document.querySelectorAll('.selectColorContainer img');
        allImages.forEach(function (img) {
            img.classList.remove('selected');
        });

        this.classList.add('selected');
    }

    var image1 = document.querySelector('.selectColorContainer img:nth-child(1)');
    var image2 = document.querySelector('.selectColorContainer img:nth-child(2)');
    var image3 = document.querySelector('.selectColorContainer img:nth-child(3)');

    image1.addEventListener('click', function () {
        updatePricesAndColor(399.00, -49, 1740.00, 'Blue', '150x230cm', 'in');
    });

    image2.addEventListener('click', function () {
        updatePricesAndColor(497.00, null, null, 'Grey', '200x300cm', 'out');
    });

    image3.addEventListener('click', function () {
        updatePricesAndColor(399.00, -49, 1740.00, 'Beige', '150x230cm', 'in');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var initialImage = document.querySelector('.selectColorContainer img');
    initialImage.style.border = '3px solid #157708';

    document.querySelector('.selectColorContainer').src = initialImage.src;
});

document.addEventListener("DOMContentLoaded", function () {
    var initialImage = document.querySelector('.multiImageContainer img');
    initialImage.style.border = '2px solid #b9d737';

    document.querySelector('.imageContainerImage').src = initialImage.src;
});
var originalImageSrc = document.querySelector('.selectColorContainer img:first-child').src;

function showImageSelect(event) {
    if (event.target.tagName === 'IMG') {
        var allImages = document.querySelectorAll('.selectColorContainer img');
        allImages.forEach(function (img) {
            img.style.border = 'none';
        });

        var selectedImageSrc = event.target.src;

        var colorCode = selectedImageSrc.match(/\/([a-z]+)\d\.png$/i)[1];

        document.querySelector('.imageContainerImage').src = selectedImageSrc.replace('bl', colorCode);

        var multiImages = document.querySelectorAll('.multiImageContainer img');
        multiImages.forEach(function (img, index) {
            img.src = img.src.replace(/\/([a-z]+)\d\.png$/i, '/' + colorCode + (index + 1) + '.png');
        });

        event.target.style.border = '2px solid #157708';
    }
}

function showImage(event) {
    if (event.target.tagName === 'IMG') {
        var allImages = document.querySelectorAll('.multiImageContainer img');
        allImages.forEach(function (img) {
            img.style.border = 'none';
        });

        var selectedImageSrc = event.target.src;

        document.querySelector('.imageContainerImage').src = selectedImageSrc;

        event.target.style.border = '3px solid #b9d737';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var addToCardButtons = document.querySelectorAll('.addToCardButton');

    addToCardButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            button.querySelector('p').textContent = 'ADDED TO CART';

            button.style.backgroundColor = 'gray';

            button.style.color = 'black';

            setTimeout(function () {
                button.style.backgroundColor = '';

                button.style.color = '';

                button.querySelector('p').textContent = 'ADD TO CART';
            }, 2000); 
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var addReviewText = document.getElementById('addReview');
    var chevronDown = document.getElementById('chevronDown');
    var chevronRight = document.getElementById('chevronRight');
    var reviewContainer = document.getElementById('reviewContainer');

    addReviewText.addEventListener('click', function() {
        chevronDown.style.display = chevronDown.style.display === 'none' ? 'inline-block' : 'none';
        chevronRight.style.display = chevronRight.style.display === 'none' ? 'inline-block' : 'none';

        reviewContainer.style.display = reviewContainer.style.display === 'none' ? 'block' : 'none';

        if (chevronRight.style.display === 'inline-block') {
            chevronRight.classList.add('blueColor');
            addReviewText.classList.add('blueColor');
        } else {
            chevronRight.classList.remove('blueColor');
            addReviewText.classList.remove('blueColor');
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var reviewsContainer = document.getElementById('reviewsContainer');
    var noReviewsContainer = document.getElementById('noReviewsContainer');

    var reviewsText = document.querySelector('.reviewsContainer .noReviews');
    var noReviewsText = document.querySelector('.noReviewsContainer .noReviews');

    reviewsText.addEventListener('click', function () {
        reviewsContainer.style.display = 'none';
        noReviewsContainer.style.display = 'block';
    });

    noReviewsText.addEventListener('click', function () {
        reviewsContainer.style.display = 'block';
        noReviewsContainer.style.display = 'none';
    });
});


document.getElementById('chevronDown').addEventListener('click', function() {
    document.getElementById('carpetImage').classList.toggle('hiddenImage');
    document.getElementById('horizontalSlider').classList.toggle('hiddenImage');
    document.getElementById('chevronDown').classList.toggle('hiddenImage');
    document.getElementById('chevronRight').classList.toggle('hiddenImage');
});

document.getElementById('chevronRight').addEventListener('click', function() {
    document.getElementById('carpetImage').classList.toggle('hiddenImage');
    document.getElementById('horizontalSlider').classList.toggle('hiddenImage');
    document.getElementById('chevronDown').classList.toggle('hiddenImage');
    document.getElementById('chevronRight').classList.toggle('hiddenImage');
});



document.getElementById('chevronDownSize').addEventListener('click', function() {
    document.getElementById('selectSizeContainerId').classList.toggle('hiddenSizes');
    document.getElementById('chevronDownSize').classList.toggle('hiddenSizes');
    document.getElementById('chevronRightSize').classList.toggle('hiddenSizes');
});

document.getElementById('chevronRightSize').addEventListener('click', function() {
    document.getElementById('selectSizeContainerId').classList.toggle('hiddenSizes');
    document.getElementById('chevronDownSize').classList.toggle('hiddenSizes');
    document.getElementById('chevronRightSize').classList.toggle('hiddenSizes');
});

document.getElementById('chevDesDown').addEventListener('click', function() {
    document.getElementById('lorem').classList.toggle('hiddenchevDes');
    document.getElementById('chevDesDown').classList.toggle('hiddenchevDes');
    document.getElementById('chevDesRight').classList.toggle('hiddenchevDes');
});

document.getElementById('chevDesRight').addEventListener('click', function() {
    document.getElementById('lorem').classList.toggle('hiddenchevDes');
    document.getElementById('chevDesDown').classList.toggle('hiddenchevDes');
    document.getElementById('chevDesRight').classList.toggle('hiddenchevDes');
});

document.getElementById('chevDesDownAlso').addEventListener('click', function() {
    document.getElementById('addReviewMobileId').classList.toggle('hiddenchevDesAlso');
    document.getElementById('chevDesDownAlso').classList.toggle('hiddenchevDesAlso');
    document.getElementById('chevDesRightAlso').classList.toggle('hiddenchevDesAlso');
});

document.getElementById('chevDesRightAlso').addEventListener('click', function() {
    document.getElementById('addReviewMobileId').classList.toggle('hiddenchevDesAlso');
    document.getElementById('chevDesDownAlso').classList.toggle('hiddenchevDesAlso');
    document.getElementById('chevDesRightAlso').classList.toggle('hiddenchevDesAlso');
});

document.addEventListener('DOMContentLoaded', function() {
    var overlayElement = document.getElementById('overlayElement');
    var deliveryText = document.getElementById('deliveryText');
    console.log('DOMContentLoaded event triggered',{overlayElement , deliveryText});

    deliveryText.addEventListener('click', function() {
        console.log('Click event triggered');
        overlayElement.classList.toggle('active');
    });
});



