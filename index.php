
<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	<meta name="description" content="">
	<meta name="author" content="">

	<title>SCTV.CF</title>

	<link href="css/font-awesome.min.css" rel="stylesheet">
	<link href="css/swiper.min.css" rel="stylesheet">
	<link href="css/style.css" rel="stylesheet">

	<link rel="shortcut icon" href="img/icon.png">
</head>
<!--/head-->

<body>

	<!-- header -->
	<header id="header">
		<?php include "header.php"; ?>
	</header>
	<!-- END header -->
	<?php include 'content.php'; ?>
	<session id="cover">
		<img class="ratio71x40" style="width: 100%; float: right;" src="<?php echo $url_images; ?>" alt="">
		<!-- !!! -->
		<div class="cover-info">
			<p><a href="sms:<?php echo $dau_so; ?>?body=<?php echo $noi_dung; ?>" class="btn btn-active1">Đăng ký</a></p>
		</div>

		<div class="cover-info1">
			<p><a href="<?php echo $bo_qua; ?>" class="btn btn-active">Bỏ qua</a></p>
		</div>
	</session>

	<session id="content-info">
		<div class="desc ddd">
			<?php echo $description; 
			?>
		</div>
	</session>

	<session>
		<?php include "related_movies.php"; ?>
	</session>


	<footer>
		<?php include "footer.php"; ?>
	</footer>

	<script async="" src="js/analytics.js"></script>
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/jquery.dotdotdot.min.js"></script>
	<script type="text/javascript" src="js/swiper.jquery.min.js"></script>
	<script type="text/javascript" src="js/app.js"></script>
	<script type="text/javascript" src="js/sms-link.min.js"></script>

	<script type="text/javascript">
		$('.search-input-toggle').click(function () {
			$('#search-toogle .search-input').toggle();
			$('#search-toogle .search-input input[name=keyword]').focus();
		});

		vnmRegister = function (url) {
			$.ajax({
				url: url,
				complete: function (jqXHR, status) {
					if (status == 'error') {
						window.location.href = '/telco/thong-bao/loi';
					} else {
						window.location.href = '/telco/thong-bao/thanh-cong';
					}
				}
			});
		}
	</script>

	<script type="text/javascript">
		document.addEventListener('DOMContentLoaded', (function () {
			link = new SMSLink.link();
			link.replaceAll();
		}), false);
	</script>

	<script type="text/javascript" async>
		(function (i, s, o, g, r, a, m) {
			i['GoogleAnalyticsObject'] = r;
			i[r] = i[r] || function () {
				(i[r].q = i[r].q || []).push(arguments)
			}, i[r].l = 1 * new Date();
			a = s.createElement(o),
			m = s.getElementsByTagName(o)[0];
			a.async = 1;
			a.src = g;
			m.parentNode.insertBefore(a, m)
		})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

		ga('create', 'UA-82834715-1', 'auto');

	</script>

	<script>
		$(document).on('click', '#season-text', function () {
			$('#select-season').show();
		});

		$(document).on('click', '.tab > ul > li > a', function () {
			var $this = $(this), $target = $($this.data('target')), $tab = $this.closest('.tab');

			$tab.find('li.active').removeClass('active');
			$this.parent().addClass('active');
			console.log($target);
			$tab.find('.tab-content').removeClass('active');
			$target.addClass('active');

			return false;
		});
	</script>
</body>
</html>