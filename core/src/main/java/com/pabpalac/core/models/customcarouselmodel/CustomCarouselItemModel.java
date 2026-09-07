package com.pabpalac.core.models.customcarouselmodel;

import lombok.Getter;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import static org.apache.sling.models.annotations.DefaultInjectionStrategy.OPTIONAL;

@Getter
@Model(adaptables = Resource.class, defaultInjectionStrategy = OPTIONAL)
public class CustomCarouselItemModel {

    @ValueMapValue(name = "asset")
    private String asset;

    @ValueMapValue(name = "text")
    private String text;

    @ValueMapValue(name = "cta")
    private String cta;

    @ValueMapValue(name = "heroText")
    private String heroText;

    @ValueMapValue(name = "altText")
    private String altText;

    @ValueMapValue(name="ctaText")
    private String ctaText;
}
