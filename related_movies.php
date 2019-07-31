	<?php include 'content.php'; ?>
	<h2 class="suggest">Tiếp theo</h2>

	<div class="list-items">
		<div class="row">
			<?php if (isset($videos)) {
				for($i=0;$i<4;$i++){?>
				<div class="item" style="margin-bottom: 10px;">
					<div class="thumb">
						<a href="<?php echo $videos[$i]['url']; ?>">
							<div class="img ratio16x9" style="background: url('<?php echo $videos[$i]['img']; ?>') no-repeat; margin: 0 5px;"></div>
						</a>

						<div class="thumb-info">
							<a href="<?php echo $videos[$i]['url']; ?>">
								<h3 class="ddd" style="height: 32px;"><?php echo $videos[$i]['title']; ?></h3>
							</a>
						</div>
					</div>
				</div>
				<?php }} ?>
			</div>
			<div class="load-more" style="display: none;">
				<i class="icon-loading"></i>
			</div>
		</div>
