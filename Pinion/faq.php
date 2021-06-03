<section class="faq">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-12 col-xxl-10">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="title">
                                Часто задаваемые вопросы
                            </h2>
                        </div>
                        <div class="col-12">

							<?php if ( have_rows( 'faq', get_queried_object() ) ): ?>
								<?php while ( have_rows( 'faq', get_queried_object() ) ): the_row();

									// переменные
									$faq_question = get_sub_field( 'faq-question' );
									$faq_answer   = get_sub_field( 'faq-answer' );

									?>

                                    <div class="faq-item">
                                        <div class="faq-item__header">
											<?= $faq_question; ?>
                                        </div>
                                        <div class="faq-item__content tab">
											<?= $faq_answer ?>
                                        </div>
                                    </div>


								<?php endwhile; ?>
							<?php endif; ?>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>