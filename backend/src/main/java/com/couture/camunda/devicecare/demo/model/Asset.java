package com.couture.camunda.devicecare.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "asset")
public class Asset {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="assetId")
	private Long assetId;
	
	@Column(name="name")
	private String name;

	@Column(name="description")
	private String description;

	protected Asset() {}

	public Asset(Long assetId, String name, String description) {
		super();
		this.assetId = assetId;
		this.name = name;
		this.description = description;
	}

	public Long getAssetId() {
		return assetId;
	}

	public String getName() {
		return name;
	}

	public String getDescription() {
		return description;
	}

}
